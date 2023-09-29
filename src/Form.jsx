import "./Form.css";
import React, { useState } from "react";

function Form() {

  const [values, setValues] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const numbers = values.split(",").map((num) => parseFloat(num.trim()));

    // Check if the operation is selected and there are at least two valid numbers
    if (operation && numbers.length >= 2 && !numbers.includes(NaN)) {
      let calculatedResult;
      
      // Perform the selected operation
      if (operation === "sum") {
        calculatedResult = numbers.reduce((acc, num) => acc + num, 0);
      } else if (operation === "average") {
        calculatedResult = numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
      } else if (operation === "mode") {
        // Calculate mode 
        calculatedResult = calculateMode(numbers);
      }

      // Set the result
      setResult(`Result: ${calculatedResult}`);
    } else {
      // Invalid input
      setResult("Invalid input.");
    }
  };

  // Function to calculate the mode 
  const calculateMode = (numbers) => {
   
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          id="values"
          name="values"
          type="text"
          value={values}
          onChange={(e) => setValues(e.target.value)}
        />
        <select
          id="operation"
          name="operation"
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit">Calculate</button>
      </form>
      <section id="result">
        <p>{result}</p>
      </section>
    </>
  );
}

export default Form;


 