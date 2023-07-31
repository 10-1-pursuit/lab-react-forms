import { useState } from "react";
import React from "react";


import "./Form.css";

// mystring.replace(",","newchar", -1)


function Form() {
 
 
const[input,setInput]=useState('')
const Sum =()=> input.reduce( (a, b)=>a+b,0) 
const handleChange =(e)=>{setInput(e.target.value)};
console.log(handleChange)

const [option,setOption]=useState('');

const optionHandle=(e)=>{const value=e.target.value;setOption(value);};
console.log(optionHandle)


// let mySum=input.reduce((a,b)=>a=a+b,0)

// console.log(mySum)

// const newSum= input.replace(",","newchar", -1)






 
//  total=input.reduce((a,b)=>a+b);

// function Sum(){
//   const [sum,setSum]=useState('')

//   const numChange=(e)=>{const val= e.target.value;setSum(val)};

//   const sumOfNums=0;
//   const nums=handleChange;
//   for(i=0;i<nums.length;i++){

//     sumOfNums+=parseInt(nums[i])

//     return(<><h2>{numChange}</h2></>);
//  }
// }






  // let input= document.getElementById("#values")
  return (
    <>
      <form>
        <input id="values" name="values" type="text" onChange={handleChange} />
        <select id="operation" name="operation" onChange={optionHandle}>
          <option value="" ></option>
          <option value="sum" >sum</option>
          <option value="average" >average</option>
          <option value="mode" >mode</option>
        </select>
        <button type="submit" onChange={Sum} >Calculate</button>
      </form>
      <section id="result">
        
      </section>
    <h2>{input}</h2>
    <p>{option}</p>
    <p>Sum Of Nums = {add() }</p>
    <h1>Count of Numbers Input ={count()}</h1>

    <p>Here is the Mean/Average = {mean() }</p>

    <h1>Most Frequent Apperance={mode()}</h1>
    
    </>
  );
  
  function add(){
    const inputCLone=[...input]
    
    // let count= inputCLone[i].split(",").length
    
    
    // const[plus,setPlus]=useState(inputCLone);
    
    let sum=0;
    

     for (let i=0;i<inputCLone.length;i+=2){
   
     sum+=parseInt(inputCLone[i])
     }
   
     
     
     return sum;
   }
   
   function count(){
    // const count= {input}.split(",").length
    const inputCLone=[...input]
    //  let count= inputCLone[i].split(",").length
    
    // const[plus,setPlus]=useState(inputCLone);
    
    let sum=0;
    

     for (let i=0;i<inputCLone.length;i+=2){
      //  let count= inputCLone[i].split(",").length
    
   
     sum+=parseInt(inputCLone[i].split(",").length)
     }
   
     
     
     return sum;
   }

   function mean(){

    return parseInt(add())/parseInt(count())
   }


   function mode(){

    const inputCLone=[...input]
    let mostFrequent=1;
    let mode=0;
    let item;
    for(let i=0;i<inputCLone.length;i+=2){
      for(let j=0; j<inputCLone.length;j+=2){

        if(inputCLone[i]==inputCLone[j])mode++;
        if(mostFrequent<mode){

          mostFrequent=mode;
          item=parseInt(inputCLone[i]);
        }
      }
       mode=0;


     }
     return parseInt(item)

   }
  

  }

  
  

export default Form;

