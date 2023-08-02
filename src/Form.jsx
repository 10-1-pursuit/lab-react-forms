import React from "react";
import { useState } from "react";
import "./Form.css";

function Form() {

  const [valueMath, setValueMath] = useState("")
  const [arrOfNums, setArrofNums] = useState([])

  function doingMath() {
    if (valueMath === "sum") {
      arrOfNums.forEach((nums) => {
        let total = 0
        total += nums
      });
      return total;
    } else if (valueMath === "average") {
      let total = 0;
      arrOfNums.forEach((nums) => {
        total += nums;
      });
      const theAverage = total / arrOfNums.length;
      return theAverage;
    } else if (valueMath === "mode") {   // I had to get a little help from a friend with the mode. Couldn't remember how to sort how many of something. 
      const repeated = {};
      arrOfNums.forEach((num) => {
        repeated[num] = (repeated[num] || 0) + 1
      });
      let mode = null;
      let maxRepeat = 0;

      for (const num in repeated) {
        if (repeated[num] > maxRepeat) {
          maxRepeat = repeated[num]
          mode = num;
        }
      }
      return mode
    }  }

  function handleValueArray(event) {
    setValueMath(event.target.value)
    console.log("this is the synthEvent:", event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const arrayOfNumbers = event.target.array.value.split(",").map((num) =>{Number(num)})
    setArrofNums(arrayOfNumbers)
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input id="array" name="values" type="text" />
        <select id="operation" name="operation" onChange={handleValueArray}>
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit">Calculate</button>
      </form>
      <section id="result">
        <p>Results: {doingMath}</p>
      </section>
    </>
  );
}

export default Form;
