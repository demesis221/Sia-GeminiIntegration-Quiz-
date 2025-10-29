import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.REACT_APP_GEMINI_API_KEY || "";

// Debug: Log if API key is present (without exposing the key)
if (API_KEY) {
  console.log('✅ Gemini API Key loaded');
} else {
  console.warn('⚠️ Gemini API Key not found. Please check your .env file.');
}
const genAI = new GoogleGenerativeAI(API_KEY);

export const listModels = async (): Promise<string> => {
  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`);
    const data = await response.json();
    return JSON.stringify(data, null, 2);
  } catch (error) {
    return `Error listing models: ${error}`;
  }
};

export const askGemini = async (prompt: string): Promise<string> => {
  try {
    if (!API_KEY) {
      return "❌ Please set your REACT_APP_GEMINI_API_KEY in your .env file.\n\nSteps:\n1. Get your API key from https://makersuite.google.com/app/apikey\n2. Create a .env file in your project root\n3. Add: REACT_APP_GEMINI_API_KEY=your_key_here\n4. Restart the app";
    }
    
    console.log('Using API Key:', API_KEY.substring(0, 10) + '...');
    
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent(prompt);
    const response = result.response.text();
    
    if (!response) {
      throw new Error('Empty response from Gemini');
    }
    
    return response;
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    console.error("Error details:", {
      message: error.message,
      status: error.status,
      code: error.code,
      details: error.details
    });
    
    if (error.status === 400 || error.message?.includes('API key') || error.message?.includes('invalid')) {
      return "❌ API Key Issue (Free Tier)\n\nFor free Gemini API:\n1. Go to https://aistudio.google.com/app/apikey\n2. Make sure you're signed in to Google\n3. Create API key (no billing required for free tier)\n4. Copy the new key to your .env file\n5. Restart the app\n\nNote: Free tier has daily limits but no billing required.";
    }
    
    if (error.status === 403 || error.message?.includes('quota')) {
      return "❌ API quota exceeded. Check your Google AI Studio usage limits.";
    }
    
    if (error.message?.includes('blocked')) {
      return "❌ Content blocked by safety filters. Try rephrasing your question.";
    }
    
    return `❌ API Error: ${error.message || 'Unknown error'}\n\nFull error logged to console. Check browser dev tools.`;
  }
};

export const generateQuizPrompt = (topic?: string) => `
You are an expert tutor helping a student named Ernesto Jr. Beltran, studying BSIT at Cebu Technological University.
Generate 5 multiple-choice questions about System Integration and Architecture 2${topic ? ` focusing on ${topic}` : ''}.

Format each question as JSON:
{
  "question": "Question text",
  "options": ["A", "B", "C", "D"],
  "answer": "Correct answer",
  "explanation": "Brief explanation"
}

Topics to cover:
- System Integration
- System Architecture  
- Enterprise Architecture
- DevOps
- Agile and Scrum
- Project Management
`;

export const explainConceptPrompt = (concept: string) => `
You are an expert tutor helping a student named Ernesto Jr. Beltran with System Integration and Architecture 2.
Explain this concept in simple, student-friendly terms: "${concept}"

Rules:
1. Keep explanation concise and clear
2. Include a practical example if relevant
3. Focus on key points a student needs to understand
4. Use simple language
`;