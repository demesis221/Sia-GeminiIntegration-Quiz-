import React, { useState } from 'react';
import { askGemini, generateQuizPrompt, explainConceptPrompt, listModels } from '../services/gemini';

const AITutor: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    let prompt = '';

    if (input.toLowerCase().includes('quiz')) {
      prompt = generateQuizPrompt();
    } else {
      prompt = explainConceptPrompt(input);
    }

    const result = await askGemini(prompt);
    setResponse(result);
    setLoading(false);
  };

  const generateQuiz = async () => {
    setLoading(true);
    setInput('Generate 5 random quiz questions');
    const result = await askGemini(generateQuizPrompt());
    setResponse(result);
    setLoading(false);
  };

  return (
    <div className="ai-tutor">
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 style={{ color: '#667eea', fontSize: '2.5rem', marginBottom: '0.5rem' }}>🤖 Ask Gemini AI</h2>
        <p style={{ fontSize: '1.2rem', color: '#4a5568' }}>Get explanations, generate practice questions, or ask about any concept!</p>
      </div>

      <div className="quick-actions" style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        <button onClick={generateQuiz} className="btn-secondary" disabled={loading}>
          {loading ? '🤔 Thinking...' : '🎲 Generate Random Quiz'}
        </button>
        <button 
          onClick={() => {
            setInput('Explain the difference between Agile and Waterfall methodologies');
          }} 
          className="btn-secondary"
        >
          💡 Example Question
        </button>
        <button 
          onClick={async () => {
            setLoading(true);
            setInput('Test connection');
            const result = await askGemini('Say "Hello! Gemini is working correctly."');
            setResponse(result);
            setLoading(false);
          }} 
          className="btn-secondary"
          disabled={loading}
        >
          🔌 Test Connection
        </button>
        <button 
          onClick={async () => {
            setLoading(true);
            setInput('List models');
            const result = await listModels();
            setResponse(result);
            setLoading(false);
          }} 
          className="btn-secondary"
          disabled={loading}
        >
          📋 List Models
        </button>
      </div>

      <form onSubmit={handleSubmit} className="ai-form">
        <div style={{ position: 'relative' }}>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything about System Integration & Architecture 2...\n\nTry asking:\n• 'Explain DevOps in simple terms'\n• 'Create 5 questions about Scrum'\n• 'What is Enterprise Architecture?'"
            rows={6}
            style={{ paddingRight: '100px' }}
          />
          {input && (
            <button 
              type="button" 
              onClick={() => setInput('')}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'none',
                border: 'none',
                fontSize: '1.2rem',
                cursor: 'pointer',
                color: '#718096'
              }}
            >
              ✕
            </button>
          )}
        </div>
        <button type="submit" disabled={loading || !input.trim()} className="btn-primary">
          {loading ? (
            <span>
              <span style={{ display: 'inline-block', animation: 'spin 1s linear infinite', marginRight: '0.5rem' }}>⚙️</span>
              Thinking...
            </span>
          ) : (
            <span>🚀 Ask Gemini</span>
          )}
        </button>
      </form>

      {response && (
        <div className="ai-response">
          <h3 style={{ color: '#667eea', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
            🤖 Gemini's Response
            <button 
              onClick={() => setResponse('')}
              style={{
                marginLeft: 'auto',
                background: 'none',
                border: 'none',
                fontSize: '1rem',
                cursor: 'pointer',
                color: '#718096',
                padding: '0.5rem'
              }}
              title="Clear response"
            >
              ✕
            </button>
          </h3>
          <div className="response-content" style={{ lineHeight: '1.8' }}>
            {response.split('\n').map((line, i) => (
              <p key={i} style={{ marginBottom: line.trim() ? '1rem' : '0.5rem' }}>{line}</p>
            ))}
          </div>
          <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(102, 126, 234, 0.1)', borderRadius: '12px' }}>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#667eea' }}>
              💡 <strong>Tip:</strong> Ask follow-up questions or request more examples!
            </p>
          </div>
        </div>
      )}

      <div className="examples">
        <h4 style={{ color: '#667eea', marginBottom: '1rem' }}>📝 Try asking:</h4>
        <div style={{ display: 'grid', gap: '0.5rem' }}>
          {[
            'Explain the difference between Agile and Waterfall',
            'Create 5 random questions about DevOps',
            'What is Enterprise Architecture?',
            'Generate a quiz about Scrum Framework',
            'How does Continuous Integration work?',
            'What are the roles in a Scrum team?'
          ].map((example, i) => (
            <button
              key={i}
              onClick={() => setInput(example)}
              style={{
                background: 'rgba(255, 255, 255, 0.8)',
                border: '1px solid rgba(102, 126, 234, 0.2)',
                borderRadius: '8px',
                padding: '0.8rem',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontSize: '0.95rem',
                color: '#4a5568'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(102, 126, 234, 0.1)';
                e.currentTarget.style.transform = 'translateX(5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              "{example}"
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AITutor;