import { useState } from "react";

const SelectOperation = () => {
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <label>
Choose Operation:
      <select
        id="operation"
        name="operation"
        required={true}
        onChange={(syntheticE) => {
          setSelectedOption(syntheticE.target.value);
        }}
      >
        <option value=""></option>
        <option value="sum">sum</option>
        <option value="average">average</option>
        <option value="mode">mode</option>
      </select>
    </label>
  );
};

export default SelectOperation;

//the math
// make an addition, division and (eevryoccurance) function each
//when press calculate , see that the  setSelectedOption(syntheticE.target.value) is and
//if value === "average" / "mean" / "mode"
//do what it implies && return it in the new tag
