//create dynamic input component
import React, { useEffect, useState, useRef } from "react";

function DynamicInput({ type, name, value, changeHandler, placeholder }) {
  const [width, setWidth] = useState(value.toString().length);
  const changeHandlerWidth = (evt) => {
    console.log(evt.target.value.toString().length);
    setWidth(evt.target.value.toString().length);
  };

  return (
    <input
      type={type}
      name={name}
      defaultValue={value}
      onChange={changeHandlerWidth}
      autoFocus
      placeholder={placeholder}
      className="name dynamic-input-field"
      style={{ width: width + "ch" }}
    />
  );
}

export default DynamicInput;
