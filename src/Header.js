
import React from 'react';
import { useState } from 'react';
import { Form } from './Components/Form';
import { Display } from './Components/Display';
import { RealTime } from './Components/RealTime';

export const Header = () => {
   

    const [counter, setCounter] = useState(0); 
    const [textValue, setTextValue] = useState("1234");
    const [displayText, setDisplayText] = useState("1234");
//decrease the value of the counter
    const handleDecrement = () => {
        setCounter(counter-1)
    }
//increase the value of the counter
    const handleIncrement =() => {
        setCounter(counter +1)
    }

//increase the value of the counter by 2
    const handleReset =() => {
        setCounter(0)
    }

    // classwork
    //add a button that increase the value by 2
    //ass a button that resety a counter value to zero
    //handle the on change of input field
    const handleChange = (event) => {
        console.log(event)
       setTextValue(event.target.value)
    }

    //handles the submit of the form
    const onSubmitValue = (event) =>{
        //removes the default refresh behaviour
        event.preventDefault();
        //display text value that has been typed
        setDisplayText(textValue)

    }

 return  (<>
 <h1>Counter Application</h1>
 <h3>Initial Value: {counter}</h3>
 {/* method 1 for increment and decrement */}
<button onClick={()=> setCounter(counter+1)}>+</button>
{/* method 2 for increment and decrement..use this method */}
<button onClick={handleDecrement}>-</button>
<button onClick={handleReset}>Reset</button>
<hr/>
<h1>Props and Components</h1>
<Form submit = {onSubmitValue} changeText = {handleChange} value={textValue}/>
<RealTime value={textValue}/>
<Display value={displayText}/>

 </>)

}
