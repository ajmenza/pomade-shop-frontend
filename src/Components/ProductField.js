import React, { useRef, useContext } from "react";
import { useGlobalContext } from "../context";

const ProductInputField = ({ label, type, name }) => {
  const { createProductData, setCreateProductData } = useGlobalContext();
  const inputValueRef = useRef(null);

  const handleInput = () => {
    let inputValue = inputValueRef.current.value;
    setCreateProductData({ ...createProductData, [name]: inputValue })
  }


  return (

    <div className="product-field">
      <label className="pomade-label" htmlFor={name}>{label}</label>
      <input
        className="product-input"
        name={name}
        id={name}
        type={type}
        onChange={handleInput}
        ref={inputValueRef}
      />
    </div>
  );
};

export default ProductInputField;

