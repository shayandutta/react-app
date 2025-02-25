import React, { useState } from "react";

function Counter() {

//state hooks remember the old value as well despite of incrementing or decrementing
  const [number, setNumber] = useState(0); //0 is the initial number inside the state variable //number = state variable, setNumber = setter function for number(updates the variable)

  function handleClick(e) {
    console.log('render counter')
    e.stopPropagation(); //to stop propagation
    // setNumber(number+1); //state variable is passed inside the setter function 
    
    setNumber(number => number+1);  //number is now the updater function //number=1
    setNumber(number => number+1);  //number=2
    setNumber(number => number+1);  //number=3
    
    console.log(number);
  }

  return (
    <>
      <h1 style={{ color: "white" }}>{number}</h1>
      <button onClick={handleClick}>Add</button>
    </>
  );
}

export default Counter;
