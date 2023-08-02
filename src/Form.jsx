import React, {useState} from "react";
import "./Form.css";

function Form() {
  const [inputValues, setInputValues] = useState("")
  const [selectedOperation, setSelectedOperation] = useState("")
  const [result, setResult] = useState("")

  const handleInputChange = s => setInputValues(s.target.value)
  const handleOperationChange = s => setSelectedOperation(s.target.value)

  const calculateResult = () => {
    if (inputValues.trim() === "" || selectedOperation === "") {
      setResult("Invalid Input.");
      return;
    }
    const numbers = inputValues.split(",").map(numStr => parseInt(numStr.trim()))
    const isValidNumbers = numbers.every(num => !isNaN(num))
    if (!isValidNumbers) {setResult("Invalid Input."); return}
    
    switch (selectedOperation) {
      case "sum":
        setResult(numbers.reduce((acc, val) => acc + val, 0))
        break;
      case "average":
        setResult(numbers.reduce((acc, val) => acc + val, 0) / numbers.length)
        break;
      case "mode":
        const numFrequency = {}
        numbers.forEach(num => numFrequency[num] = (numFrequency[num] || 0) + 1)

        let maxFrequency = 0
        let modes = []

        for (const num in numFrequency) {
          if (numFrequency[num] > maxFrequency) {
            maxFrequency = numFrequency[num]
            modes = [num]
          } else if (numFrequency[num] === maxFrequency) {
            modes.push(num)
          }
        }

        setResult(modes.join(", "))
        break;
      default:
        setResult("Invalid Input.")
        break;
      }
  }
      
  return (
    <>
      <form onSubmit={s => s.preventDefault()}> 
        <input id="values" name="values" type="text" value={inputValues} onChange={handleInputChange} />
        <select id="operation" name="operation" value={selectedOperation} onChange={handleOperationChange}>
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="button" onClick={calculateResult}>Calculate</button>
      </form>
      <section id="result">
        <p>{result}</p>
      </section>
    </>
  );
}

export default Form;
