import useInput2 from "../hooks/use-input-for-BasicForm";

const BasicForm = (props) => {

  const {
    name: firstName,
    inputChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    inputIsValid: firstNameIsValid,
    reset: resetFirstName,
    hasError: firstNameHasErrors
  } = useInput2(value => value.trim().length > 0)

  const {
    name: lastName,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    inputIsValid: lastNameIsValid,
    reset: resetLastName,
    hasError: lastNameHasErrors
  } = useInput2(value => value.trim().length > 0)

  const {
    name: email,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    inputIsValid: emailIsValid,
    reset: resetEmail,
    hasError: emailHasErrors
  } = useInput2(value => value.includes("@"))

  let formIsValid = false;

  if (emailIsValid && lastNameIsValid && firstNameIsValid) {
    formIsValid = true;
  } 

  const submitNameHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
    resetFirstName();
    resetEmail();
    resetLastName()
    formIsValid = false;
  };

  const nameClasses = !firstNameHasErrors  
  ?  'form-control' 
  : 'form-control invalid';

  const lastNameClasses = !lastNameHasErrors  
  ?  'form-control' 
  : 'form-control invalid';
  
  const emailClasses = !emailHasErrors  
  ?  'form-control' 
  : 'form-control invalid';

  return (
    <form onSubmit={submitNameHandler}>
      <div className='control-group'>
        <div className={nameClasses}>
          <label htmlFor='name'>First Name</label>
          <input 
            type='text' 
            id='name'
            value={firstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
           />
           {firstNameHasErrors && <p className={"error-text"}>Please enter a valid first name</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input 
            type='text' 
            id='name'
            value={lastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler} 
          />
          {lastNameHasErrors && <p className={"error-text"}>Please enter a valid last name</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input 
            type='email' 
            id='email'
            value={email}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler} 
        />
        {emailHasErrors && <p className={"error-text"}>Please enter a valid email</p>}

      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
