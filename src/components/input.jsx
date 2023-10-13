import { useState, useContext } from "react";
import { ListContext } from "../context/listprovider";
const Input = () => {
  const [value, setValue] = useState("");
  const { addToList } = useContext(ListContext);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleClieck = () => {
    if (value === "") return alert("PLEASE ENTER ANYTHING");
    addToList(value);
    setValue("");
  };
  return (
    <div className="top-box">
      <input
        type="text"
        placeholder="Enter your name"
        value={value}
        onChange={handleChange}
      />
      <button onClick={() => handleClieck()}>+</button>
    </div>
  );
};
export default Input;
