import React from "react";
import { useState } from "react";
import "./Form.css";

function Form() {
  
  const [valueArray, setValueArray] = useState([])
  
  function handleValueArray(event){
    setValueArray(event.target.value)
    console.log("this is the synthEvent:", event.target.value)
  }
  
  function handleSubmit(event){
   event.preventDefault()
   console.log("form Submitted", event.target.array.value)
  
  //THIS IS WHERE I WOULD DO LOGIC??//
  
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
        <p></p>
      </section>
    </>
  );
}

export default Form;
