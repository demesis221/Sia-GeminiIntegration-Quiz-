import React from 'react';

const NotesPage: React.FC = () => {
  const notes = [
    {
      topic: "🟠 Agile & Scrum",
      content: [
        "Agile: Adaptive, flexible, iterative project management approach",
        "Scrum: Agile framework with clear roles, events, and short development cycles (sprints)",
        "Core Roles: Product Owner, Scrum Master, Development Team",
        "Scrum Events: Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective",
        "Agile Values: Individuals & interactions, working software, customer collaboration, responding to change",
        "Sprint: Time-boxed iterations (1-4 weeks) delivering potentially releasable increments"
      ]
    },
    {
      topic: "🟠 DevOps",
      content: [
        "DevOps: Combines Development & Operations for faster, automated software delivery",
        "CI/CD: Continuous Integration & Continuous Deployment — automates building, testing, and delivery",
        "Continuous Testing: Automated testing at various levels (unit, integration, system)",
        "Continuous Monitoring: Monitors software in production and manages infrastructure",
        "Primary goal: Improve collaboration between development and operations teams"
      ]
    },
    {
      topic: "🟠 System Integration & Architecture",
      content: [
        "System Integration: Connecting computing systems to operate as unified system",
        "System Architecture: Conceptual model defining structure, behavior, and system blueprint",
        "API: Application Programming Interface for system communication",
        "Interface: Defines how system components communicate with each other",
        "Client-Server Architecture: Centralized control with efficient resource allocation"
      ]
    },
    {
      topic: "🟠 Enterprise Architecture",
      content: [
        "Enterprise Architecture: Blueprint aligning IT systems and business goals",
        "Strategic framework tracking connections and data flows between systems",
        "Defines organizational structure through processes, information flows, IT systems",
        "Supports innovation, digital transformation, and efficient resource management",
        "Ensures consistency, efficiency, and strategic alignment"
      ]
    },
    {
      topic: "🟠 Project Management",
      content: [
        "Project Management: Application of knowledge, skills, tools to meet project requirements",
        "Agility: Ability to create and respond to change in uncertain environments",
        "Traditional vs Agile: Fixed plan vs adaptive, flexible approach",
        "Scrum Framework: Addresses complex adaptive problems while delivering high value"
      ]
    }
  ];

  return (
    <div className="notes-page">
      <h2>📚 Study Notes</h2>
      <p>Quick reference for System Integration & Architecture 2</p>

      <div className="notes-grid">
        {notes.map((note, i) => (
          <div key={i} className="note-card">
            <h3>{note.topic}</h3>
            <ul>
              {note.content.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="study-tips">
        <h3>💡 Study Tips</h3>
        <ul>
          <li>Take practice quizzes regularly to reinforce learning</li>
          <li>Use the AI tutor to clarify complex concepts</li>
          <li>Focus on weak areas shown in your scoreboard</li>
          <li>Review explanations after each quiz for deeper understanding</li>
          <li>Remember: Agile values flexibility and responding to change</li>
          <li>DevOps is about collaboration between Dev and Ops teams</li>
          <li>Enterprise Architecture aligns business goals with IT strategy</li>
        </ul>
      </div>

      <div className="cheat-sheet">
        <h3>📋 Quick Reference Cheat Sheet</h3>
        <div className="cheat-items">
          <div className="cheat-item">🟠 <strong>Agile:</strong> Adaptive, flexible, iterative approach</div>
          <div className="cheat-item">🟠 <strong>Scrum:</strong> Framework with roles, events, sprints</div>
          <div className="cheat-item">🟠 <strong>DevOps:</strong> Dev + Ops collaboration for faster delivery</div>
          <div className="cheat-item">🟠 <strong>CI/CD:</strong> Automated building, testing, deployment</div>
          <div className="cheat-item">🟠 <strong>Enterprise Architecture:</strong> IT-business alignment blueprint</div>
        </div>
      </div>
    </div>
  );
};

export default NotesPage;