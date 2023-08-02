import { useState } from "react"



const [number1, setNumber1] = useState(0)
const [number2, setNumber2] = useState(0)
const [total, setTotal] = useState(number1 + number2)


function addNums() {

    setTotal(number1 + number2);

}







export default addNums;