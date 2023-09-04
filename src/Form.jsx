import React from "react";
import "./Form.css";
import { useState } from "react";



function Form() {
  const [localValues, setLocalValues] = useState([]);
  const [values, setValues] = useState([]);
  const [operation, setOperation] = useState("");

  function handleInputChanges() {
    setLocalValues(event.target.value);
    setValues(event.target.value.split(",").map(Number));
  }

  function handleOperationChanges() {
    setOperation(event.target.value);
  }

  console.log(values);
  console.log(operation);

  function handleSubmit(event) {
    event.preventDefault();
    let result = 0;

    if (values.includes(NaN)) {
      // alert("Please enter only numbers");
      document.querySelector("#values").classList.add("error");
      document.querySelector("#result p").innerHTML = "Invalid input.";
    }
    else if (operation === "") {
      // alert("Please select an operation");
      document.querySelector("#operation").classList.add("error");
      document.querySelector("#result p").innerHTML = "Invalid input.";
    } else if (operation === "sum" && !values.includes(NaN)) {
      if (document.querySelector(".error")) {
        document.querySelector(".error").classList.remove("error");
      }
      result = values.reduce((a, b) => a + b, 0);
      document.querySelector("#result p").innerHTML = result;
      handleReset();
    } else if (operation === "average" && !values.includes(NaN)) {
      if (document.querySelector(".error")) {
        document.querySelector(".error").classList.remove("error");
      }
      result = values.reduce((a, b) => a + b, 0) / values.length;
      document.querySelector("#result p").innerHTML = result;
      handleReset();
    } else if (operation === "mode" && !values.includes(NaN)) {
      if (document.querySelector(".error")) {
        document.querySelector(".error").classList.remove("error");
      }
      result = values.sort((a, b) => values.filter(v => v === a).length - values.filter(v => v === b).length).pop();
      document.querySelector("#result p").innerHTML = result;
      handleReset();
    }


  }
  console.log(values);
  console.log(operation);

  function handleReset() {
    setLocalValues([]);
    setValues([]);
  }

  return (
    <>
      <form>
        <input id="values" name="values" type="text" value={localValues} onChange={handleInputChanges} />
        <select id="operation" name="operation" onChange={handleOperationChanges}>
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit" onClick={handleSubmit}>Calculate</button>
      </form>
      <section id="result">
        <p></p>
      </section>
    </>
  );
}

export default Form;
