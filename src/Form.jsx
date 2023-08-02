import React from "react";
import { useState } from "react";
import "./Form.css";
import addNums from "./Components/addNums";
import averageUpTheNumbers from "./Components/averageUpTheNumbers";
import modeThemNumsUp from "./Components/modeThemNumsUp.jsx"

function Form() {

  const [numberValues, setNumberValues] = useState("")
  const [calculationResult, setCalculationResult] = useState("")

  const handleCalculate = (synthEvent) => {
    synthEvent.preventDefault();

    const handleInputChange = (synthEvent) => { setNumberValues(synthEvent.target.value) }
    const arrayOfNumbers = numberValues
      .split(",").map((numberValues) => parseInt(value.trim(), 10)); //remove white space

    const resultOfSum = addNums(arrayOfNumbers);
    const resultOfAvg = averageUpTheNumbers(arrayOfNumbers);
    const resultOfMode = modeThemNumsUp(arrayOfNumbers);

    setCalculationResult(`Sum: ${resultOfSum}, Average: ${resultOfAvg}, Mode: ${resultOfMode}`)
  };


  return (
    <>
      <form>
        <input id="values" name="values" type="text" value={numberValues} onChange={(synthEvent) => setNumberValues(synthEvent.target.value)} />

        <select id="operation" name="operation">
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit" onClick={handleCalculate}>Calculate</button>
      </form >
      <section id="result">
        <p>{calculationResult}</p>
      </section>
    </>
  );
}

export default Form;
