import React from "react";
import { useState } from "react";
import Form from "./Form";
import addNums from "./Components/addNums";
import "./App.css";

function App() {


  return (
    <main>
      <p>Enter each number in the array, separated by a ','</p>
      <Form />
      <br />
      <br />
      <h2> total displayed here </h2>
    </main>
  );
}

export default App;
