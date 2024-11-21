// src/App.js
import React, { useState } from 'react';
import './App.css';
import QuizApp from './components/QuizApp';
import DictionaryApp from './components/DictionaryApp';
import ProgressTracker from './components/ProgressTracker';

function App() {
  const [progress, setProgress] = useState(0);

  const handleCorrectAnswer = () => {
    setProgress((prevProgress) => Math.min(prevProgress + 10, 100)); // increments by 10% for each correct answer
  };

  return (
    <div className="container">
      <h1>Learning Hub Dashboard</h1>
      <ProgressTracker progress={progress} />
      <QuizApp onCorrectAnswer={handleCorrectAnswer} />
      <DictionaryApp />
    </div>
  );
}

export default App;
