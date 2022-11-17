import React, { useEffect, useState } from "react";
import { convertString } from '../Utils';
import PropTypes from "prop-types";
import './Form.css'

export default function Form(props) {
  const { setRequestTitle } = props;

  const [inputValue, setInputValue] = useState("");
  const [optionValue, setOptionValue] = useState("all movies");

  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // const handleOptionChange = (e) => {
  //   console.log(e);
  //   console.log("passed value:", e.target.value);
  //   setOptionValue(e.target.value);
  // };

  useEffect(() => {
    console.log("setvalue:", optionValue);
  }, [optionValue]);

  
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
     <button type="button" onClick={onSubmit}>Submit</button>
      </form>
    </>
  //   <form className="inputContainer">
  //   <div className="">
  //     <p>Enter a Movie Title</p>
  //     <div className="input1">
  //       <input
  //         value={inputValue}
  //         type="text"
  //         className="movieInput"
  //         onChange={handleInputChange}
  //         autoFocus
  //       />
  //       {/* <select onChange={handleOptionChange} value={optionValue}>
  //         <option
  //           defaultValue="all movies"
  //           key="all movies"
  //           value={"all movies"}
  //         >
  //           All Movies
  //         </option>
  //         <option key="one movie" value={"one movie"}>
  //           One Movie
  //         </option>
  //       </select> */}
  //     <div className="buttonBox">
  //       <button type="submit" onClick={onSubmit}>
  //       Submit
  //     </button>
  //     </div>
  //     </div>
  //     </div>
  //   </form>
   );
}

Form.propTypes = {
  setSearchTerm: PropTypes.func,
};

