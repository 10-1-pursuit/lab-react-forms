import React from "react";
import "./Form.css";
import {useState} from "react";

function Form() {
const [input, setUserInput] =useState("")
const [operation, setOperation] =useState("")
const [result, setResult] = useState("")

function  handleUserInput(event){
  setUserInput(event.target.value);

}
function handleOperation(event){
  setOperation(event.target.value);

}
const inputArr =input.split(",");
const numArr = inputArr.map((num)=> Number(num));

const calculateNumArr = (operation)=>{
  switch (operation){
    case "sum":
      getSum(numArr);
      break;
      case "average":
        getAverage(numArr);
        break;
        case "mode":
          getMode(numArr);
          break;
          default:
            setResult("Invalid input.");

  }
  function getSum(numArr) {
    const sum =numArr.reduce((total, num)=>{
      return total + num
    },0);
    setResult(sum)
  }
  function getAverage(numArr){
    const numSum =numArr.reduce((total, num)=>{
      return total + Number(num)
    },0)
    const numAverage = numSum / numArr.length + 1
setResult(numAverage)
  }
  function getMode(numArr){
    const numCount= {};
    numArr.forEach((num)=>{
      numCount[num] = (numCount[num] || 0) + 1;
    })
    const valuesArr = Object.values(numCount)
    const highestCount = Math.max(...valuesArr)
    const modeIndex = valuesArr.indexOf(highestCount)
    const numMode =numArr[modeIndex]
    setResult(numMode)
  }
}
function handleSubmit(event){
  event.preventDefault();
  calculateNumArr(operation);
}

  return (
    <main>
    <>
      <form onSubmit={handleSubmit}>
        <input id="values" name="values" type="text" value={input} onChange={handleUserInput}/>
        <select id="operation" name="operation" onChange={handleOperation}>
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
    </main>
  );
}

export default Form;
