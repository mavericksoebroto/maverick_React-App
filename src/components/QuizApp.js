// components/QuizApp.js
import React, { useState } from 'react';
import './QuizApp.css'; // Import the CSS for styling

const questions = [
  { 
    question: "What is a common example of latency in network performance?",
    options: ["Instantaneous response", "Delayed response", "Immediate feedback", "Constant speed"],
    answer: "Delayed response"
  },
  { 
    question: "In programming, synchronous operations are:",
    options: ["Non-blocking", "Asynchronous", "Blocking", "Parallel"],
    answer: "Blocking"
  },
  { 
    question: "What is the best description of encapsulation in OOP?",
    options: ["Global variables", "Hiding data", "Function inheritance", "Open access"],
    answer: "Hiding data"
  },
  { 
    question: "A recursive function is one that:",
    options: ["Repeats without end", "Calls itself", "Runs in parallel", "Executes linearly"],
    answer: "Calls itself"
  },
  { 
    question: "Which option best defines a polymorphic method in OOP?",
    options: ["Method hiding", "Multiple uses", "Inaccessible", "Overloaded"],
    answer: "Multiple uses"
  },
  { 
    question: "What does immutable mean in relation to data structures?",
    options: ["Unchangeable", "Temporary", "Permanent", "Non-recursive"],
    answer: "Unchangeable"
  },
  { 
    question: "An algorithm is best described as:",
    options: ["Random process", "Logical steps", "Non-functional", "A syntax error"],
    answer: "Logical steps"
  },
  { 
    question: "What does API stand for?",
    options: ["Application Processing Interface", "Applied Program Interface", "Application Programming Interface", "Advanced Programming Input"],
    answer: "Application Programming Interface"
  },
  { 
    question: "A data structure like a stack operates on which principle?",
    options: ["LIFO", "FIFO", "Random", "Sequential"],
    answer: "LIFO"
  },
  { 
    question: "The term deprecated in programming means:",
    options: ["Recommended", "Obsolete", "Essential", "Current"],
    answer: "Obsolete"
  },
  { 
    question: "What best describes latency in networking?",
    options: ["Data rate", "Transmission delay", "Instant access", "Bandwidth"],
    answer: "Transmission delay"
  },
  { 
    question: "What is a protocol in computer networks?",
    options: ["Data storage", "Communication rules", "Algorithm", "Programming error"],
    answer: "Communication rules"
  },
  { 
    question: "What does the stack data structure support?",
    options: ["First in, last out", "Direct access", "Any order", "Search only"],
    answer: "First in, last out"
  },
  { 
    question: "The purpose of a compiler is to:",
    options: ["Execute code", "Translate code", "Run applications", "Debug code"],
    answer: "Translate code"
  },
  { 
    question: "Which term defines syntax error?",
    options: ["Logical error", "Runtime error", "Coding error", "Data error"],
    answer: "Coding error"
  },
  { 
    question: "A loop in programming refers to:",
    options: ["A data structure", "Code repetition", "Code storage", "A network error"],
    answer: "Code repetition"
  },
  { 
    question: "Which keyword declares a constant variable?",
    options: ["let", "var", "const", "assign"],
    answer: "const"
  },
  { 
    question: "What is the meaning of iteration in a loop?",
    options: ["Single execution", "Sequential steps", "Loop repetition", "Random processing"],
    answer: "Loop repetition"
  },
  { 
    question: "Which data structure operates on a first in, first out basis?",
    options: ["Stack", "Queue", "Array", "Tree"],
    answer: "Queue"
  },
  { 
    question: "What does inheritance enable in OOP?",
    options: ["Code duplication", "Data hiding", "Reusing properties", "Object creation"],
    answer: "Reusing properties"
  }
  // Add additional questions here as needed
];

function QuizApp({ onCorrectAnswer }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [notification, setNotification] = useState('');
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [score, setScore] = useState(0);

  const handleOptionClick = (option) => {
    const isCorrect = option === questions[currentQuestion].answer;
    setIsAnswerCorrect(isCorrect);
    setSelectedOption(option);
    
    if (isCorrect) {
      setScore(score + 1); // Increment score only if the answer is correct
      setNotification("Correct Answer!");
      onCorrectAnswer(); // Trigger progress increment
    } else {
      setNotification("Incorrect Answer :(");
    }

    setTimeout(() => {
      setNotification('');
      setSelectedOption(null);
      setIsAnswerCorrect(null);
      setCurrentQuestion((prev) => prev + 1);
    }, 1000); // Proceed to next question after 1 second
  };

  return (
    <div className="quiz-app">
      <h2>Quiz App</h2>
      {currentQuestion < questions.length ? (
        <div>
          <p>{questions[currentQuestion].question}</p>
          <div className="options-container">
            {questions[currentQuestion].options.map((option, index) => (
              <div
                key={index}
                className={`option-box ${
                  selectedOption === option
                    ? isAnswerCorrect
                      ? 'correct'
                      : 'incorrect'
                    : ''
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
          <p>{notification}</p>
        </div>
      ) : (
        <p>Your score: {score}/{questions.length}</p>
      )}
    </div>
  );
}

export default QuizApp;
