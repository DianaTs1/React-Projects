import {useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {

  const {
    value: enteredName, 
    hasError: nameHasError,
    enteredValueChangeHandler: enteredNameChangeHandler, 
    enteredValueBlurHandler: enteredNameBlurHandler,
    resetInput: resetName 
  } = useInput(val => val.trim() !== "")

  const {
    value: enteredEmail, 
    hasError: emailHasError,
    enteredValueChangeHandler: enteredEmailChangeHandler, 
    enteredValueBlurHandler: enteredEmailBlurHandler,
    resetInput: resetEmail 
  } = useInput(val => val.includes("@"))

  const submitNameHandler = (e) => {
    e.preventDefault();
    if (nameHasError || emailHasError) {
      return;
    };
    resetEmail()
    resetName()
  }
  
  // // handle email 

  // const enterdEmailHandler = (e) => {
  //   setemailChanged(true)
  //   setEmail(e.target.value);
  //   console.log(email)
  // }

  // const emailIsValid = email.includes("@");
  // console.log(emailIsValid)


  // handle overal form

  // const blurHandler = (e) => {
  //   setInputChanged(true);
  //   setemailChanged(true);
  //   if (!inputIsValid || !emailIsValid) {
  //     return;
  //   };
  // };

  // let formIsValid = false;

  // if (inputIsValid && emailIsValid) {
  //   formIsValid = true;
  // };

  const formIsInvalid = nameHasError || emailHasError
  const formStyles = formIsInvalid
      ? "form-control invalid" 
      : "form-control"

  return (
    <form onSubmit={submitNameHandler}>
      <div className={formStyles}>
        <label htmlFor='name'>Your Name</label>
        <input 
          onChange={enteredNameChangeHandler} 
          onBlur={enteredNameBlurHandler}
          type='text' 
          id='name'
          value={enteredName}
          placeholder="name"
         />
        {nameHasError &&  <p className="error-text">Please type somethin to submit the input</p>}

        <input 
          onChange={enteredEmailChangeHandler} 
          onBlur={enteredEmailBlurHandler}
          type='email' 
          id='email'
          value={enteredEmail}
          placeholder="email"
         />
         {emailHasError && <p className="error-text">Please type somethin to submit the email</p>}
      </div>
      <div className="form-actions">
        <button disabled={formIsInvalid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
