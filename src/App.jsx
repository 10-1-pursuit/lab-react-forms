import React, {useState} from 'react';
import './App.css';
import Form from './Form';

const App = () => {
  const [inputNumbers, setInputNumbers] = useState('');
  // The code starts by declaring a Ustate variable for the input numbers.
  const [selectedOperation, setSelectOperation] = useState('sum');
  const [result, setResult] = useState('');
  const[error,setError] = useState(false);
  // It then declares another state variable for the selected operation, and finally it declares a final state variable for the result of the calculation.
  const handleInputChange = (event) => {
    setInputNumbers(event.target.value);
    setError(false);
  };

  //The handleInputChange function is called whenever an event occurs that changes any of these variables.

  const handleOperationChange = (event) => {
    setSelectOperation(event.target.value);
    setError(false);
  };
 //The handleOperationChange function is called when an event occurs that changes what operation to perform on each number in order to calculate its sum or average value.
  const handleCalculate = () => {
    const numbers = inputNumbers.split(',').map((num) => parseFloat(num.trim()));
//Finally, the handleCalculate function calculates how many times each number appears in all of the numbers provided as input and returns this information as a string with commas separating them
    if (numbers.some(isNaN)) {
      setResult('Invalid input.');
      setError(true);
      //The code is a function that takes in numbers and returns the sum, average, or mode of those numbers.
 //The code first checks to see if the input is an empty string.
 //If it is then it sets the result as invalid input.
    } else{
      //Otherwise, it checks what operation was selected by checking which property on the object was clicked on (sum, average, or mode).
      switch (selectedOperation) {
        case 'sum':
        setResult(numbers.reduce((acc, curr) => acc + curr, 0).toString());
        //If "sum" was selected then it calls a reduce method on each number in order to add them together and return their total value.
 //It also converts this value into a string so that users can see how much they have added up so far
        break;
        case 'average':
          setResult(numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length.toFixed(2));
          //If "average" was selected then it calculates how many values are in each list and divides them by this number to get their average value.
          break;
          case 'mode':
            //If "mode" was selected then it uses Object's keys method to find out which values occur most often among all of its properties (in this case 0 would be returned because there are no other modes) and returns these values as strings joined with commas between them
            const counts = {};
            numbers.forEach((num) => {
              counts[num] = (counts[num] || 0) + 1;
            });
            const modes = Object.keys(counts).filter((num) => counts[num] === Math.max(...Object.values(counts)));
            setResult(modes.join(', '));
            break;
            default:
              setResult('Invalid input.');
          }

          setInputNumbers('');
        }
      };
//The code first checks if the input is an integer or not and if it is, then it will check if the selected operation is "sum", "average" or "mode".
 //If it's any of these operations, then the result will be calculated based on that.
      return (
        <div className="app">
          <h1>Number Calculator</h1>
          <input
          type="text"
          placeholder="Enter comma-separated numbers"
          value={inputNumbers}
          onChange={handleInputChange}
          className={error ? 'error' : ''}
          />
          <select value ={selectedOperation} onChange={handleOperationChange} className={error ? 'error': ''}>
            <option value = "sum">Sum</option>
            <option value = "average">Average</option>
            <option value = "mode">Mode</option>
            </select>
            <button onClick = {handleCalculate}>Calculate</button>
            <p>{result}</p>
        </div>
      );
};


export default App;
