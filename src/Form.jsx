import React, { useState } from "react";
import "./Form.css";
import SelectOperation from "./Components/SelectOperation";
import CalculateButton from "./Components/CalculateButton";

function Form() {
  const [inputValue, setInputValue] = useState("");
  const [showInputText, setShowInputText] = useState(false);
  //  function(){

  //  }

  return (
    <>
      <form
        onSubmit={(syntheticE) => {
          syntheticE.preventDefault();

          setShowInputText(true);
          // [syntheticE.target.values.value]
        }}
      >
        <input
          id="values"
          name="values"
          type="text"
          onChange={(syntheticEvent) => {
            setInputValue(syntheticEvent.target.value);
          }}
          value={inputValue}
        />
        {/* <select id="operation" name="operation"  onChange={
     (syntheticE) => {
    console.log(syntheticE.target.value)}}>
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select> */}
        <SelectOperation />
        <CalculateButton />
      </form>
      <section id="result">
        <p>{showInputText ? <span>{inputValue}</span> : <></>}</p>
      </section>
    </>
  );
}

export default Form;
