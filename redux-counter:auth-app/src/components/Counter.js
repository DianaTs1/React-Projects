import React from 'react';
import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/index';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(5))
  }
  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  };
 

  const counterContent = <React.Fragment><h1>Redux Counter</h1>
  <div className={classes.value}>{counter}</div>
  <div className={classes.buttons}>
    <button onClick={incrementHandler}>increment</button>
    <button onClick={increaseHandler}>increment my 5</button>
    <button onClick={decrementHandler}>decrement</button>
  </div></React.Fragment>

  return (
    <main className={classes.counter}>
      {show && counterContent}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
