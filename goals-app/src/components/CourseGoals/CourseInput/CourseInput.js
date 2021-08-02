import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValueValid, setIsValueValid] = useState(true)

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length){
      setIsValueValid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValueValid(false)
      return;
    }
    props.onAddGoal(enteredValue);
   
  };



  return (
    <form onSubmit={formSubmitHandler}>
      <div className={` ${styles["form-control"]} ${!isValueValid && "invalid"}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
