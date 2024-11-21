// src/components/ProgressTracker.js
import React from 'react';
import './ProgressTracker.css';

const ProgressTracker = ({ progress }) => (
  <div className="progress-container">
    <p>Progress: {progress}%</p>
    <div className="progress-bar">
      <div className="progress-fill" style={{ width: `${progress}%` }}></div>
    </div>
  </div>
);

export default ProgressTracker;
