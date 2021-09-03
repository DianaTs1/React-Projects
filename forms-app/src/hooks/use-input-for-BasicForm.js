import React, { useState } from 'react'

const useInput2 = (validateValue) => {
    const [enteredInput, setEnteredInput] = useState("");
    const [inputChanged, setInputChanged] = useState(false)

    const inputChangeHandler = (e) => {
        setInputChanged(true);
        setEnteredInput(e.target.value);
        console.log(e.target.value)
    };

    const inputBlurHandler = () => {
        setInputChanged(true)
    };

    const inputIsValid = validateValue(enteredInput);
    const hasError = !inputIsValid && inputChanged;

    const reset = () =>{
        setEnteredInput("");
        setInputChanged(false)
    };

    return {
        name: enteredInput,
        inputChangeHandler,
        inputBlurHandler,
        inputIsValid,
        reset,
        hasError
    }
    }

export default useInput2
