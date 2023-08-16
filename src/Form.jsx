import React, { useState } from 'react';
import './App.css';
import Form from './Form'; // Import the Form component

function App() {
  const [result, setResult] = useState('');

  const handleFormSubmit = event => {
    event.preventDefault();

    const valuesInput = document.getElementById('values');
    const operationSelect = document.getElementById('operation');
    const resultParagraph = document.querySelector('#result p');

    const inputNumbers = valuesInput.value;
    const operation = operationSelect.value;

    const numbersArray = inputNumbers.split(',').map(number => Number(number.trim()));

    if (numbersArray.some(isNaN)) {
      resultParagraph.textContent = 'Invalid input.';
      return;
    }

    let calculatedResult;

    if (operation === 'sum') {
      calculatedResult = numbersArray.reduce((acc, val) => acc + val, 0);
    } else if (operation === 'average') {
      calculatedResult = numbersArray.reduce((acc, val) => acc + val, 0) / numbersArray.length;
    } else if (operation === 'mode') {
      const occurrences = {};
      numbersArray.forEach(num => {
        occurrences[num] = (occurrences[num] || 0) + 1;
      });
      const mode = Object.keys(occurrences).reduce((a, b) =>
        occurrences[a] > occurrences[b] ? a : b
      );
      calculatedResult = mode;
    }

    resultParagraph.textContent = calculatedResult;
  };

  return (
    <div className="App">
      <h1>Number Calculator</h1>
      <Form />
      <button onClick={handleFormSubmit}>Calculate</button>
      <div id="result">
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
