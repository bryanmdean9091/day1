import React, { useEffect, useState } from "react";
// import { convertString } from '../Utils';
import PropTypes from "prop-types";
import './Form.css'
import { getMoviesById } from "../movies";

export default function Form(props) {
  const { setRequestTitle } = props;

  const [inputValue, setInputValue] = useState('');


  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };


  // useEffect(() => {
  //   console.log("setvalue:", optionValue);
  // }, [optionValue]);

 
 const onSubmit = (e) => {
     e.preventDefault();
    setRequestTitle(inputValue);
    setInputValue("");
  };

  return (
<>
    <form className="form">
    <p>Enter a Movie</p>
      <input 
      value={ inputValue }
      type= 'text' 
      className='movieInput'
      onChange={handleInputChange}
      autoFocus
      />
     <button id="btn" type="button"   onClick={onSubmit}>Submit</button>
      </form>
    </>
   );
}

Form.propTypes = {
  setSearchTerm: PropTypes.func,
};

