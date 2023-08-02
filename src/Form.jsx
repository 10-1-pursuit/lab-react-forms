import React, { useState } from "react";
import "./Form.css";
import SelectOperation from "./Components/SelectOperation";
// import CalculateButton from "./Components/CalculateButton";

function Form() {
  const [inputValue, setInputValue] = useState("");
  const [showInputText, setShowInputText] = useState(false);
  

  return (
    <>
      <form
        onSubmit={(syntheticE) => {
          syntheticE.preventDefault();
          setShowInputText(true);
          //select options' value
          const arithmaticMethod = syntheticE.target.operation.value;
          console.log(arithmaticMethod);
          //const totalNum = arithmaticMethod.map((e) => console.log(e));
          //if sum - add all the numbers -
          //if average -add all the numbers and divide by total #s
          //if mode - which # is repeated/find every occurance - FILTEREEREREFRF
        }}
      ></form>
      <input type="text" id="numerical" onSubmit={(e)=>{
        console.log(e.target.value)
        
        //i want this onSubmit to create a span/p/something for text
      }}/>
      <SelectOperation />
       <button type="submit">Calculate</button>

      <section id="result">
        <p>{showInputText ? <span>{inputValue}</span> : <></>}</p>
      </section>
    </>
  );
}

export default Form;
