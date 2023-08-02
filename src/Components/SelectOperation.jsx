import { useState } from "react"

const SelectOperation = () => {
 const [selectedOption, setSelectedOption] = useState("");
    return (
        <select id="operation" name="operation"  onChange={
            (syntheticE) => {
           setSelectedOption(syntheticE.target.value)}}>
                 <option value="">Choose Operation</option>
                 <option value="sum">sum</option>
                 <option value="average">average</option>
                 <option value="mode">mode</option>
               </select>
    )
}

export default SelectOperation

//the math
// make an addition, division and (eevryoccurance) function each
//when press calculate , see that the  setSelectedOption(syntheticE.target.value) is and
//if value === "average" / "mean" / "mode"
//do what it implies && return it in the new tag 