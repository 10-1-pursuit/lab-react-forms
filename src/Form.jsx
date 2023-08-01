import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [values, setValues] = useState("")
  const [inputs, setInputs] = useState("")

  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault();
        if (e.target.operation.value === "sum") {
          let total = inputs.split(",")
          total = total.map((n) => Number(n));
          total = total.reduce((a, b) => a + b)
          setInputs(total)
        }

        if (e.target.operation.value === "average") {
          let total = inputs.split(",")
          total = total.map((n) => Number(n));
          let length = (total.length)
          let closeTotal = total.reduce((a, b) => (a + b))
          let finalTotal = closeTotal / length
          setInputs(finalTotal)
        }
      }} >

        <input
          id="values"
          name="values"
          type="text"

          onChange={(e) => {
            setInputs(e.target.value)
          }}
          value={inputs}
        />
        
        <select id="operation" name="operation">
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>

        <button type="submit">Calculate</button>

      </form>

      <section id="result">
        <p>{inputs}</p>
      </section>
    </>
  );
}

export default Form;
