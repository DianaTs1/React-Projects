// import React, {useState} from "react"
import React, {useReducer} from "react"
import Todos from "./Components/Todos"
// Some CSS

const wrapper = {
  display: "flex",
  marginTop: "40px",
  justifyContent: "center",
  alignItems: "center"
}

const button = {
  padding: "70px 110px 70px 110px",
  fontSize: "30px",
  background: "green",
  border: "none",
  cursor: "pointer"
}

const span = {
  padding: "70px",
  fontSize: "30px",
  background: "yellow",
  border: "none",
  margin: "0 10px 0 10px"
}


const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement"
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count +1 }
    case ACTIONS.DECREMENT:
      return { count: state.count -1 }
    default:
      return state
  }
}

function App() {

  // Using useStaate
  // const [numberValue, setNumberValue] = useState(0)

  // const increaseHandler = () => {
  //   return setNumberValue(prevNumber => prevNumber + 1)
  // }

  // const dicrementHandler = () => {
  //   return setNumberValue(prevNumber => prevNumber - 1)
  // }

  //Using useReducer
  const [state, dispatch] = useReducer(reducer, {count: 0})
  
  const increaseHandler = () => {
    dispatch({type: ACTIONS.INCREMENT})
  }

  const dicrementHandler = () => {
    dispatch({type: ACTIONS.DECREMENT})
  }


  return (
    <>
      <div style={wrapper}>
        <button onClick={increaseHandler} style={button}>+</button>
        <span style={span}>{state.count}</span>
        <button onClick={dicrementHandler} style={button}>-</button>
      </div>
      <Todos></Todos>
    </>
  );
}

export default App;
