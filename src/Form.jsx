import React from "react";
import { useState } from "react";
import "./Form.css";

function Form() {
  // store the number values entered by user
  const [inputValues, setInputeValues] = useState("");
  // store the operations in the dropdown
  const [selectedOperation, setSelectedOperation] = useState("")
  // used to store the results after calculation
  const [result, setResult] = useState("");
  // indicate whether input is valid
  const [isValid, setIsValid] = useState(true);

  // called when the input value changes.
  const handleInputChange = (event) => {
    setInputeValues(event.target.value);
    setIsValid(true);
  }

// called when operation selection changes
  const handleOperationChange = (event) => {
    setSelectedOperation(event.target.value);
    setIsValid(true);
  }

  // called when Calculate button is clicked
  const handleCalculate = (event) => {
    event.preventDefault()
    const numbers = inputValues.split(',').map(Number);

    if (selectedOperation === 'sum') {
      setResult(numbers.reduce((acc, num) => acc + num, 0));
    } else if (selectedOperation === "average") {
      setResult(numbers.reduce((acc, num) => acc + num, 0) / numbers.length);
    } else if (selectedOperation === 'mode') {
      const numberFreq = {}
      numbers.forEach((num) => {
        numberFreq[num] = (numberFreq[num] || 0) + 1
      })
      let maxFreq = 0;
      let mode = null;
      for (const num in numberFreq) {
        if (numberFreq[num] > maxFreq) {
          maxFreq = numberFreq[num];
          mode = num;
        }
      }
      setResult(mode);
    } else {
      setIsValid(false);
      setResult("");
    }

    setInputeValues("");
    setSelectedOperation("");
  }
  return (
    <>
      <form>
        <input id="values" name="values" type="text" value={inputValues} onChange={handleInputChange} className={isValid ? "" : "error"}/>
        <select id="operation" name="operation" value={selectedOperation} onChange={handleOperationChange} className={isValid ? "" : "error"}>
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit" onClick={handleCalculate}>Calculate</button>
      </form>
      <section id="result">
        <p>{isValid ? `${result}` : "Invalid input."}</p>
      </section>
    </>
  );
}

export default Form;
