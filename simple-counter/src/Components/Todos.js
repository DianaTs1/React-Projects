import { useState, useReducer } from "react";
import Todo from "./Todo";


const wrapper = {
    display: "flex",
    marginTop: "90px",
    justifyContent: "center",
    alignItems: "center",
  }

const bar = {
    height: "3em",
    width: "20em"
}


export const ACTIONS = { 
    ADD_TODO: "addTodo", 
    TOGGLE_TODO: "toggleTodo",
    DELETE_TODO: "delete-todo",
}

const LOCAL_STORAGE_KEY = "todo-lists"

const reducer = (todos, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]
        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return {...todo, complete: !todo.complete}
                }
                return todo
            })
        case ACTIONS.DELETE_TODO:
            return todos.filter(todo => todo.id !== action.payload.id)
        default:
            return todos
    }
}

const newTodo = (name) => {
    return {id: Date.now(), name: name, complete: false}
}

const Todos = () => {
    const [todos, dispatch] = useReducer(reducer, [])
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type: ACTIONS.ADD_TODO, payload: {name: input}})
        setInput("")
    }

    return (
        <>
            <form style={wrapper} onSubmit={handleSubmit}>
                <input
                    style={bar} 
                    type="text" 
                    value={input} 
                    onChange={(e) => {setInput(e.target.value)}}
                />
            </form>
            {todos.map(todo => {
                return (<Todo todo={todo} dispatch={dispatch} key={todo.id}/>)
            })}
        </>
    )
}

export default Todos
