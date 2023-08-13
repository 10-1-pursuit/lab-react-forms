import React from "react";
import "./Form.css";
import { useState, useRef } from 'react'



const Form = () => {
const [numInput ,setNumInput] = useState("");
const [calculation, setCalculation]= useState("sum")
const [result, setResult] = useState("");





const handleInputChange = (e) => {
  setNumInput(e.target.value);
};

const handleOperationChange = (e) => {
  setCalculation(e.target.value);
  
};

const formCalculator = () => {
const numbers = numInput.split(",").map(Number);

if (numbers.some((num) => isNaN(num))) {
  setResult("Invalid input.");
  return;
}




if(calculation === "sum"){
  setResult(numbers.reduce((acc, num) => acc + num, 0));
} else if (calculation === "average") {
setResult(numbers.lennth === 0 ? 0  :  numbers.reduce ((acc, num ) => acc + num, 0)/ numbers.length);
}else if (calculation === "mode"){
setResult(Array.from(new Set(numbers)). sort ((a,b) => b-a)[0]);
}else {
  setResult("Invalid Input");
}

};


  return (
    
    <div>
      <form>
        <input id="values" name="values" type="text" value={numInput} onChange={handleInputChange}/>
        <select id="operation" name="operation" value={calculation} onChange={handleOperationChange}>
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button onClick={formCalculator} type="submit">Calculate</button>
      </form>
      <section id="result">
        <p >{result}</p>
      </section>
      </div>
    
  );
}

export default Form;
