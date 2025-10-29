import React, { useEffect, useState } from 'react';
import { getProgress, getQuizResults } from '../utils/storage';

const Scoreboard: React.FC = () => {
  const progress = getProgress();
  const results = getQuizResults();

  return (
    <div className="scoreboard">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ color: '#667eea', fontSize: '2.5rem', marginBottom: '0.5rem' }}>🏆 Your Progress</h2>
        <p style={{ fontSize: '1.2rem', color: '#4a5568' }}>Track your learning journey and achievements</p>
      </div>

      <div className="best-scores">
        <h3 style={{ color: '#667eea', marginBottom: '2rem', fontSize: '1.8rem' }}>🎆 Best Scores by Category</h3>
        {Object.keys(progress).length === 0 ? (
          <div style={{ 
            textAlign: 'center', 
            padding: '3rem', 
            background: 'rgba(102, 126, 234, 0.05)', 
            borderRadius: '20px',
            border: '2px dashed rgba(102, 126, 234, 0.3)'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📊</div>
            <p style={{ fontSize: '1.2rem', color: '#4a5568', marginBottom: '1rem' }}>No scores yet. Take a quiz to get started!</p>
            <p style={{ color: '#718096' }}>Your progress will appear here once you complete your first quiz.</p>
          </div>
        ) : (
          <div className="scores-grid">
            {Object.entries(progress).map(([category, score]) => (
              <div key={category} className="score-card">
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                  {score >= 80 ? '🎆' : score >= 60 ? '😊' : '💪'}
                </div>
                <h4 style={{ color: '#2d3748', marginBottom: '1rem', fontSize: '1.1rem' }}>{category}</h4>
                <div className="score">{score}%</div>
                <div className={`grade ${score >= 80 ? 'excellent' : score >= 60 ? 'good' : 'needs-work'}`}>
                  {score >= 80 ? 'Excellent!' : score >= 60 ? 'Good Job!' : 'Keep Studying'}
                </div>
                <div style={{ 
                  width: '100%', 
                  height: '6px', 
                  background: '#e2e8f0', 
                  borderRadius: '3px', 
                  marginTop: '1rem',
                  overflow: 'hidden'
                }}>
                  <div style={{ 
                    width: `${score}%`, 
                    height: '100%', 
                    background: score >= 80 ? '#28a745' : score >= 60 ? '#ffc107' : '#dc3545',
                    borderRadius: '3px',
                    transition: 'width 1s ease-out'
                  }} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="recent-results" style={{ marginTop: '3rem' }}>
        <h3 style={{ color: '#667eea', marginBottom: '2rem', fontSize: '1.8rem' }}>📈 Recent Quiz Results</h3>
        {results.length === 0 ? (
          <div style={{ 
            textAlign: 'center', 
            padding: '2rem', 
            background: 'rgba(248, 249, 250, 0.8)', 
            borderRadius: '16px',
            border: '1px solid rgba(233, 236, 239, 0.5)'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📋</div>
            <p style={{ color: '#4a5568' }}>No quiz results yet.</p>
          </div>
        ) : (
          <div className="results-list">
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 2fr 1fr', 
              gap: '1rem', 
              padding: '1rem', 
              background: 'rgba(102, 126, 234, 0.1)', 
              borderRadius: '12px', 
              marginBottom: '1rem',
              fontWeight: 'bold',
              color: '#667eea'
            }}>
              <span>Date</span>
              <span>Category</span>
              <span>Score</span>
            </div>
            {results.slice(-10).reverse().map((result, i) => (
              <div key={i} className="result-item" style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 2fr 1fr', 
                gap: '1rem',
                alignItems: 'center'
              }}>
                <span style={{ color: '#718096', fontSize: '0.9rem' }}>{result.date}</span>
                <span style={{ fontWeight: '500' }}>{result.category}</span>
                <span style={{ 
                  fontWeight: 'bold', 
                  color: result.score >= 80 ? '#28a745' : result.score >= 60 ? '#ffc107' : '#dc3545',
                  fontSize: '1.1rem'
                }}>
                  {result.score}%
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div style={{ 
        marginTop: '3rem', 
        padding: '2rem', 
        background: 'rgba(102, 126, 234, 0.05)', 
        borderRadius: '20px',
        textAlign: 'center',
        border: '1px solid rgba(102, 126, 234, 0.1)'
      }}>
        <h4 style={{ color: '#667eea', marginBottom: '1rem' }}>🎯 Goal Tracker</h4>
        <p style={{ color: '#4a5568', marginBottom: '1rem' }}>Aim for 80% or higher in all categories!</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', color: '#28a745' }}>🎆</div>
            <div style={{ fontSize: '0.9rem', color: '#718096' }}>80%+ Excellent</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', color: '#ffc107' }}>😊</div>
            <div style={{ fontSize: '0.9rem', color: '#718096' }}>60%+ Good</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', color: '#dc3545' }}>💪</div>
            <div style={{ fontSize: '0.9rem', color: '#718096' }}>&lt;60% Keep Studying</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;