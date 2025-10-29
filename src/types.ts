export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
  explanation?: string;
  category: string;
  type: 'multiple-choice' | 'true-false' | 'fill-blank' | 'essay';
}

export interface QuizResult {
  score: number;
  total: number;
  category: string;
  date: string;
}

export interface UserProgress {
  [category: string]: number; // best score for each category
}