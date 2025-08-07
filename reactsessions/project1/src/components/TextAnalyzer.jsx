import React, { useState } from 'react';
import './TextAnalyzer.css';

const TextAnalyzer = () => {
  const [text, setText] = useState('');

  const handleUppercase = () => {
    setText(text.toUpperCase());
  };

  const handleLowercase = () => {
    setText(text.toLowerCase());
  };

  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;

  return (
    <div className="container">
      <div className="left-box">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your text here"
        ></textarea>
        <div className="buttons">
          <button onClick={handleUppercase}>UPPER</button>
          <button onClick={handleLowercase}>LOWER</button>
        </div>
      </div>

      <div className="right-box">
        <h3>{text}</h3>
        <p>TOTAL WORDS: {wordCount}</p>
        <p>TOTAL CHARS: {charCount}</p>
      </div>
    </div>
  );
};

export default TextAnalyzer;
