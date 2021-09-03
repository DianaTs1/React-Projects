import React, {useState} from 'react'

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const enteredValueChangeHandler = (e) => {
        setEnteredValue(e.target.value);
        console.log(enteredValue)
    };

    const enteredValueBlurHandler = (e) => {
        setIsTouched(true);
    }; 

    const resetInput = () => {
        setEnteredValue("");
        setIsTouched(false)
    }

    return {
        value: enteredValue, 
        hasError, 
        // isValid: valueIsValid,
        enteredValueChangeHandler, 
        enteredValueBlurHandler,
        resetInput 
    };
};

export default useInput
