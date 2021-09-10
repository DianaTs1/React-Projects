import { useDispatch, useSelector } from "react-redux";
import { Alphabet } from "./Alphabet";
import {incrementByValue, increment, decrement, reset} from "./store/count-slicer"
import {toggle} from "./store/toggle-slicer";

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment())
  }
  const decrementHandler = () => {
    dispatch(decrement())
  }
  const incrementByValueHandler = () => {
    dispatch(incrementByValue(30))
  };
  const resetHandler = () =>{
    dispatch(reset())
  }

  const toggleSelector = useSelector((state) => state.toggle.isVisible);
  const toggleHandler = () => {
    dispatch(toggle())
    console.log(toggleSelector)
  };

  const counterContent =  
  <div className='counter-albhabet-wrapper'>
    <div className="counter">
      <h1>Counter = {count}</h1>
      <button onClick={incrementHandler}>+1</button>
      <button onClick={decrementHandler}>-1</button>
      <button onClick={incrementByValueHandler}>+30</button>
      <button onClick={resetHandler}>reset</button>
    </div>
</div>

  return (
    <main className="section-wrapper">
      <section className="counter-section">
          <button onClick={toggleHandler}>toggle counter</button>
          {toggleSelector&&counterContent}
      <Alphabet></Alphabet>
      </section>
    </main>
  )
}

export default App;
