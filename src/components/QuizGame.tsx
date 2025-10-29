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
    if (currentQ.type !== 'essay') {
      setShowFeedback(true);
    }
  };

  const handleTextInput = (value: string) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentIndex] = value;
    setUserAnswers(newAnswers);
  };

  const nextQuestion = () => {
    setShowFeedback(false);
    if (currentIndex < currentQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      calculateScore();
    }
  };

  const calculateScore = async () => {
    let correct = 0;
    
    for (let i = 0; i < currentQuestions.length; i++) {
      const q = currentQuestions[i];
      const userAnswer = userAnswers[i];
      
      if (q.type === 'fill-blank') {
        // Case-insensitive comparison for fill-blank
        if (userAnswer?.toLowerCase().trim() === q.answer.toLowerCase().trim()) {
          correct++;
        }
      } else if (q.type === 'essay') {
        // AI evaluation for essay questions
        if (userAnswer && userAnswer.trim().length > 20) {
          // For now, give partial credit for essays with sufficient content
          // In a real implementation, you'd use AI to evaluate
          correct += 0.8; // Give 80% credit for attempting essay
        }
      } else {
        // Exact match for multiple choice and true/false
        if (userAnswer === q.answer) correct++;
      }
    }
    
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
          {currentQuestions.map((q, i) => {
            const isCorrect = q.type === 'fill-blank' ? 
              userAnswers[i]?.toLowerCase().trim() === q.answer.toLowerCase().trim() :
              q.type === 'essay' ? 
                userAnswers[i]?.trim().length > 20 : // Essays get partial credit
                userAnswers[i] === q.answer;
            
            return (
              <div key={q.id} className={`answer-item ${isCorrect ? 'correct' : 'incorrect'}`}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <h4 style={{ margin: 0, flex: 1 }}>{q.question}</h4>
                  <span style={{ 
                    background: q.type === 'fill-blank' ? '#667eea' : q.type === 'essay' ? '#28a745' : '#764ba2',
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                    marginLeft: '1rem'
                  }}>
                    {q.type === 'fill-blank' ? 'Fill Blank' : 
                     q.type === 'essay' ? 'Essay' : 
                     q.type === 'true-false' ? 'True/False' : 'Multiple Choice'}
                  </span>
                </div>
                
                <div style={{ marginBottom: '1rem' }}>
                  <strong>Your answer:</strong> 
                  {q.type === 'essay' ? (
                    <div style={{ 
                      marginTop: '0.5rem', 
                      padding: '1rem', 
                      background: 'rgba(255, 255, 255, 0.8)', 
                      borderRadius: '8px',
                      fontStyle: 'italic',
                      maxHeight: '150px',
                      overflowY: 'auto'
                    }}>
                      {userAnswers[i] || 'No answer provided'}
                    </div>
                  ) : (
                    <span style={{ marginLeft: '0.5rem' }}>{userAnswers[i] || 'No answer'}</span>
                  )}
                </div>
                
                {q.type !== 'essay' && !isCorrect && (
                  <div style={{ marginBottom: '1rem' }}>
                    <strong>Correct answer:</strong> {q.answer}
                  </div>
                )}
                
                {q.type === 'essay' && (
                  <div style={{ marginBottom: '1rem' }}>
                    <strong>Sample answer:</strong>
                    <div style={{ 
                      marginTop: '0.5rem', 
                      padding: '1rem', 
                      background: 'rgba(40, 167, 69, 0.1)', 
                      borderRadius: '8px',
                      fontSize: '0.95rem'
                    }}>
                      {q.answer}
                    </div>
                  </div>
                )}
                
                {q.explanation && (
                  <p className="explanation">💡 {q.explanation}</p>
                )}
              </div>
            );
          })}
        </div>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={restartQuiz} className="btn-primary">Try Again (All {questions.length} Questions)</button>
          {(() => {
            const wrongQuestions = currentQuestions.filter((q, i) => {
              const isCorrect = q.type === 'fill-blank' ? 
                userAnswers[i]?.toLowerCase().trim() === q.answer.toLowerCase().trim() :
                q.type === 'essay' ? 
                  userAnswers[i]?.trim().length > 20 :
                  userAnswers[i] === q.answer;
              return !isCorrect;
            });
            
            return wrongQuestions.length > 0 ? (
              <button onClick={() => {
                setCurrentQuestions(wrongQuestions);
                setCurrentIndex(0);
                setUserAnswers(new Array(wrongQuestions.length).fill(''));
                setShowResults(false);
                setShowFeedback(false);
                setScore(0);
              }} className="btn-secondary" style={{ background: '#dc3545', borderColor: '#dc3545' }}>Retry Wrong Questions ({wrongQuestions.length})</button>
            ) : null;
          })()}
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
        
        {currentQ.type === 'fill-blank' ? (
          <div style={{ marginBottom: '2rem' }}>
            <input
              type="text"
              value={userAnswers[currentIndex] || ''}
              onChange={(e) => handleTextInput(e.target.value)}
              placeholder="Type your answer here..."
              style={{
                width: '100%',
                padding: '1rem',
                fontSize: '1.1rem',
                border: '2px solid #e2e8f0',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.9)',
                transition: 'all 0.3s ease'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#667eea';
                e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#e2e8f0';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>
        ) : currentQ.type === 'essay' ? (
          <div style={{ marginBottom: '2rem' }}>
            <textarea
              value={userAnswers[currentIndex] || ''}
              onChange={(e) => handleTextInput(e.target.value)}
              placeholder="Write your essay answer here... (Minimum 50 words recommended)"
              rows={8}
              style={{
                width: '100%',
                padding: '1rem',
                fontSize: '1.1rem',
                border: '2px solid #e2e8f0',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.9)',
                transition: 'all 0.3s ease',
                resize: 'vertical',
                fontFamily: 'inherit',
                lineHeight: '1.6'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#667eea';
                e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#e2e8f0';
                e.target.style.boxShadow = 'none';
              }}
            />
            <div style={{ 
              fontSize: '0.9rem', 
              color: '#718096', 
              marginTop: '0.5rem',
              textAlign: 'right'
            }}>
              {userAnswers[currentIndex]?.split(' ').filter(word => word.length > 0).length || 0} words
            </div>
          </div>
        ) : (
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
        )}
      </div>

      {showFeedback && userAnswers[currentIndex] && currentQ.type !== 'essay' && (
        <div style={{ 
          marginTop: '2rem', 
          padding: '1.5rem', 
          borderRadius: '16px',
          background: (currentQ.type === 'fill-blank' ? 
            userAnswers[currentIndex]?.toLowerCase().trim() === currentQ.answer.toLowerCase().trim() :
            userAnswers[currentIndex] === currentQ.answer) ? 'rgba(40, 167, 69, 0.1)' : 'rgba(220, 53, 69, 0.1)',
          border: `2px solid ${(currentQ.type === 'fill-blank' ? 
            userAnswers[currentIndex]?.toLowerCase().trim() === currentQ.answer.toLowerCase().trim() :
            userAnswers[currentIndex] === currentQ.answer) ? '#28a745' : '#dc3545'}`,
          animation: 'slideInUp 0.5s ease-out'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
            <span style={{ 
              fontSize: '1.5rem', 
              marginRight: '0.5rem'
            }}>
              {(currentQ.type === 'fill-blank' ? 
                userAnswers[currentIndex]?.toLowerCase().trim() === currentQ.answer.toLowerCase().trim() :
                userAnswers[currentIndex] === currentQ.answer) ? '✅' : '❌'}
            </span>
            <h4 style={{ 
              color: (currentQ.type === 'fill-blank' ? 
                userAnswers[currentIndex]?.toLowerCase().trim() === currentQ.answer.toLowerCase().trim() :
                userAnswers[currentIndex] === currentQ.answer) ? '#28a745' : '#dc3545',
              margin: 0,
              fontSize: '1.2rem'
            }}>
              {(currentQ.type === 'fill-blank' ? 
                userAnswers[currentIndex]?.toLowerCase().trim() === currentQ.answer.toLowerCase().trim() :
                userAnswers[currentIndex] === currentQ.answer) ? 'Correct!' : 'Incorrect'}
            </h4>
          </div>
          
          <div style={{ marginBottom: '1rem' }}>
            <strong>Your answer:</strong> {userAnswers[currentIndex]}
          </div>
          
          {!(currentQ.type === 'fill-blank' ? 
            userAnswers[currentIndex]?.toLowerCase().trim() === currentQ.answer.toLowerCase().trim() :
            userAnswers[currentIndex] === currentQ.answer) && (
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
          onClick={currentQ.type === 'essay' ? nextQuestion : (showFeedback ? nextQuestion : () => setShowFeedback(true))}
          disabled={!userAnswers[currentIndex] || (currentQ.type === 'essay' && userAnswers[currentIndex]?.trim().length < 20)}
          className="btn-primary"
          style={{ minWidth: '150px' }}
        >
          {currentQ.type === 'essay' ? 
            (currentIndex === currentQuestions.length - 1 ? '🏁 Finish Quiz' : 'Next Question →') :
            (!showFeedback ? 'Check Answer' : 
             (currentIndex === currentQuestions.length - 1 ? '🏁 Finish Quiz' : 'Next Question →'))}
        </button>
      </div>
    </div>
  );     
}

export default QuizGame;
