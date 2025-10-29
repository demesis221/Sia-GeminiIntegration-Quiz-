import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { questions } from '../data/questions';
import { Question } from '../types';
import { saveProgress, saveQuizResult } from '../utils/storage';

const QuizGame: React.FC = () => {
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    // Use all 44 questions by default, randomized
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setCurrentQuestions(shuffled);
    setUserAnswers(new Array(shuffled.length).fill(''));
  }, []);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentIndex] = answer;
    setUserAnswers(newAnswers);
    setShowFeedback(true);
  };

  const nextQuestion = () => {
    setShowFeedback(false);
    if (currentIndex < currentQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      calculateScore();
    }
  };

  const calculateScore = () => {
    let correct = 0;
    currentQuestions.forEach((q, i) => {
      if (userAnswers[i] === q.answer) correct++;
    });
    
    const percentage = Math.round((correct / currentQuestions.length) * 100);
    setScore(percentage);
    setShowResults(true);
    
    // Save progress
    const category = "Mixed Quiz";
    saveProgress(category, percentage);
    saveQuizResult({
      score: percentage,
      total: currentQuestions.length,
      category,
      date: new Date().toLocaleDateString()
    });
  };

  const restartQuiz = () => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setCurrentQuestions(shuffled);
    setCurrentIndex(0);
    setUserAnswers(new Array(shuffled.length).fill(''));
    setShowResults(false);
    setShowFeedback(false);
    setScore(0);
  };

  if (currentQuestions.length === 0) return (
    <div className="quiz-game">
      <div className="loading">Loading your quiz questions...</div>
    </div>
  );

  if (showResults) {
    return (
      <div className="quiz-results">
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          {score >= 80 ? '🎉' : score >= 60 ? '😊' : '💪'}
        </div>
        <h2 style={{ color: '#667eea', marginBottom: '1rem' }}>
          {score >= 80 ? 'Excellent Work!' : score >= 60 ? 'Good Job!' : 'Keep Studying!'}
        </h2>
        <div className="score">{score}%</div>
        <p style={{ fontSize: '1.2rem', color: '#4a5568', marginBottom: '2rem' }}>
          You got {currentQuestions.filter((q, i) => userAnswers[i] === q.answer).length} out of {currentQuestions.length} questions correct!
        </p>
        
        <div className="answers-review">
          {currentQuestions.map((q, i) => (
            <div key={q.id} className={`answer-item ${userAnswers[i] === q.answer ? 'correct' : 'incorrect'}`}>
              <h4>{q.question}</h4>
              <p>Your answer: {userAnswers[i] || 'No answer'}</p>
              <p>Correct answer: {q.answer}</p>
              {q.explanation && <p className="explanation">💡 {q.explanation}</p>}
            </div>
          ))}
        </div>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={restartQuiz} className="btn-primary">Try Again (All {questions.length} Questions)</button>
          <button onClick={() => {
            const shuffled = [...questions].sort(() => Math.random() - 0.5).slice(0, 10);
            setCurrentQuestions(shuffled);
            setCurrentIndex(0);
            setUserAnswers(new Array(10).fill(''));
            setShowResults(false);
            setShowFeedback(false);
            setScore(0);
          }} className="btn-secondary">Quick Quiz (10 Questions)</button>
          <Link to="/" className="btn-secondary" style={{ textDecoration: 'none', display: 'inline-block' }}>Back to Home</Link>
        </div>
      </div>
    );
  }

  const currentQ = currentQuestions[currentIndex];

  return (
    <div className="quiz-game">
      <div className="quiz-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h2 style={{ color: '#667eea', margin: 0 }}>Question {currentIndex + 1} of {currentQuestions.length}</h2>
          <div style={{ 
            background: 'rgba(102, 126, 234, 0.1)', 
            padding: '0.5rem 1rem', 
            borderRadius: '20px',
            fontSize: '0.9rem',
            fontWeight: '600',
            color: '#667eea'
          }}>
            {Math.round(((currentIndex + 1) / currentQuestions.length) * 100)}% Complete
          </div>
        </div>
        <div className="category">{currentQ.category}</div>
        <div style={{ 
          width: '100%', 
          height: '4px', 
          background: '#e2e8f0', 
          borderRadius: '2px', 
          marginTop: '1rem',
          overflow: 'hidden'
        }}>
          <div style={{ 
            width: `${((currentIndex + 1) / currentQuestions.length) * 100}%`, 
            height: '100%', 
            background: 'linear-gradient(90deg, #667eea, #764ba2)', 
            borderRadius: '2px',
            transition: 'width 0.3s ease'
          }} />
        </div>
      </div>

      <div className="question">
        <h3>{currentQ.question}</h3>
        
        <div className="options">
          {currentQ.options.map((option, i) => (
            <button
              key={i}
              className={`option ${userAnswers[currentIndex] === option ? 'selected' : ''}`}
              onClick={() => handleAnswer(option)}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ 
                  marginRight: '1rem', 
                  fontWeight: 'bold', 
                  color: userAnswers[currentIndex] === option ? 'white' : '#667eea'
                }}>
                  {String.fromCharCode(65 + i)}
                </span>
                <span>{option}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {showFeedback && userAnswers[currentIndex] && (
        <div style={{ 
          marginTop: '2rem', 
          padding: '1.5rem', 
          borderRadius: '16px',
          background: userAnswers[currentIndex] === currentQ.answer ? 'rgba(40, 167, 69, 0.1)' : 'rgba(220, 53, 69, 0.1)',
          border: `2px solid ${userAnswers[currentIndex] === currentQ.answer ? '#28a745' : '#dc3545'}`,
          animation: 'slideInUp 0.5s ease-out'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
            <span style={{ 
              fontSize: '1.5rem', 
              marginRight: '0.5rem'
            }}>
              {userAnswers[currentIndex] === currentQ.answer ? '✅' : '❌'}
            </span>
            <h4 style={{ 
              color: userAnswers[currentIndex] === currentQ.answer ? '#28a745' : '#dc3545',
              margin: 0,
              fontSize: '1.2rem'
            }}>
              {userAnswers[currentIndex] === currentQ.answer ? 'Correct!' : 'Incorrect'}
            </h4>
          </div>
          
          <div style={{ marginBottom: '1rem' }}>
            <strong>Your answer:</strong> {userAnswers[currentIndex]}
          </div>
          
          {userAnswers[currentIndex] !== currentQ.answer && (
            <div style={{ marginBottom: '1rem' }}>
              <strong>Correct answer:</strong> {currentQ.answer}
            </div>
          )}
          
          {currentQ.explanation && (
            <div style={{ 
              padding: '1rem', 
              background: 'rgba(255, 255, 255, 0.8)', 
              borderRadius: '8px',
              fontStyle: 'italic',
              color: '#4a5568'
            }}>
              <strong>💡 Explanation:</strong> {currentQ.explanation}
            </div>
          )}
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem' }}>
        <div style={{ color: '#718096', fontSize: '0.9rem' }}>
          {!userAnswers[currentIndex] ? 'Please select an answer' : 
           !showFeedback ? '✓ Answer selected' : 
           userAnswers[currentIndex] === currentQ.answer ? '🎉 Well done!' : '📚 Keep studying!'}
        </div>
        <button 
          onClick={showFeedback ? nextQuestion : () => setShowFeedback(true)}
          disabled={!userAnswers[currentIndex]}
          className="btn-primary"
          style={{ minWidth: '150px' }}
        >
          {!showFeedback ? 'Check Answer' : 
           currentIndex === currentQuestions.length - 1 ? '🏁 Finish Quiz' : 'Next Question →'}
        </button>
      </div>
    </div>
  );
};

export default QuizGame;