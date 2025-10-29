import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProgress } from '../utils/storage';

const Home: React.FC = () => {
  const progress = getProgress();

  return (
    <div className="home">
      <div className="floating">
        <h1>🎯 SysArch Quiz Master</h1>
      </div>
      <p style={{ fontSize: '1.3rem', color: '#4a5568', marginBottom: '3rem', fontWeight: '500' }}>
        Master System Integration & Architecture 2 with AI-powered quizzes!
      </p>
      
      <div className="menu">
        <Link to="/quiz" className="menu-btn">
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📝</div>
          <div>Full Quiz</div>
          <small style={{ opacity: 0.8, fontSize: '0.9rem' }}>All 44 questions from Tests I-IV</small>
        </Link>
        <Link to="/ai" className="menu-btn">
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🤖</div>
          <div>Ask Gemini</div>
          <small style={{ opacity: 0.8, fontSize: '0.9rem' }}>AI-powered help</small>
        </Link>
        <Link to="/notes" className="menu-btn">
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📚</div>
          <div>Study Notes</div>
          <small style={{ opacity: 0.8, fontSize: '0.9rem' }}>Quick reference</small>
        </Link>
        <Link to="/scoreboard" className="menu-btn">
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🏆</div>
          <div>Scoreboard</div>
          <small style={{ opacity: 0.8, fontSize: '0.9rem' }}>Track progress</small>
        </Link>
      </div>

      {Object.keys(progress).length > 0 && (
        <div className="progress-summary">
          <h3 style={{ marginBottom: '1.5rem', color: '#667eea' }}>🎯 Your Best Scores</h3>
          {Object.entries(progress).map(([category, score]) => (
            <div key={category} className="score-item">
              <span>{category}</span>
              <span style={{ 
                fontWeight: 'bold', 
                color: score >= 80 ? '#28a745' : score >= 60 ? '#ffc107' : '#dc3545',
                fontSize: '1.1rem'
              }}>
                {score}%
              </span>
            </div>
          ))}
        </div>
      )}
      
      <div style={{ 
        marginTop: '3rem', 
        padding: '1.5rem', 
        background: 'rgba(102, 126, 234, 0.1)', 
        borderRadius: '16px',
        border: '1px solid rgba(102, 126, 234, 0.2)'
      }}>
        <p style={{ color: '#667eea', fontWeight: '600', margin: 0 }}>
          💡 Ready to ace your System Integration & Architecture 2 exam?
        </p>
      </div>
    </div>
  );
};

export default Home;