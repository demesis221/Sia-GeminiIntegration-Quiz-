import { UserProgress, QuizResult } from '../types';

export const saveProgress = (category: string, score: number): void => {
  const progress = getProgress();
  if (!progress[category] || score > progress[category]) {
    progress[category] = score;
    localStorage.setItem('quiz-progress', JSON.stringify(progress));
  }
};

export const getProgress = (): UserProgress => {
  const stored = localStorage.getItem('quiz-progress');
  return stored ? JSON.parse(stored) : {};
};

export const saveQuizResult = (result: QuizResult): void => {
  const results = getQuizResults();
  results.push(result);
  localStorage.setItem('quiz-results', JSON.stringify(results));
};

export const getQuizResults = (): QuizResult[] => {
  const stored = localStorage.getItem('quiz-results');
  return stored ? JSON.parse(stored) : [];
};