import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [outputString, setOutputString] = useState('');
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const handleClick = (letter) => {
    let newOutputString = outputString + letter;
    newOutputString = replaceConsecutiveLetters(newOutputString);
    setOutputString(newOutputString);
  };

  const replaceConsecutiveLetters = (str) => {
    return str.replace(/(\w)\1{2,}/g, (match) => '_'.repeat(Math.ceil(match.length / 3)));
  };

  return (
    <div className="App">
      <div className="grid-container">
        {alphabet.map((letter) => (
          <div
            key={letter}
            className="tile"
            onClick={() => handleClick(letter)}
          >
            {letter}
          </div>
        ))}
      </div>
      <div id="outputString">
        {outputString}
      </div>
    </div>
  );
};

export default App;
