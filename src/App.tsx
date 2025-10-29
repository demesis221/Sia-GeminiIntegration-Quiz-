import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import QuizGame from './components/QuizGame';
import AITutor from './components/AITutor';
import NotesPage from './components/NotesPage';
import Scoreboard from './components/Scoreboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <Link to="/" className="logo">🎯 SysArch Quiz Master</Link>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/quiz">Quiz</Link>
            <Link to="/ai">AI Tutor</Link>
            <Link to="/notes">Notes</Link>
            <Link to="/scoreboard">Scores</Link>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<QuizGame />} />
            <Route path="/ai" element={<AITutor />} />
            <Route path="/notes" element={<NotesPage />} />
            <Route path="/scoreboard" element={<Scoreboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;