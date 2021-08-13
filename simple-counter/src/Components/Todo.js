import React from 'react'
import {ACTIONS} from "./Todos.js"

const wrapper = {
    display: "flex",
    margin: "10px 200px",
    justifyContent: "center",
    alignItems: "center",
  }

const deleteButton = {
    padding: "7px 11px 7px 11px",
    fontSize: "18px",
    background: "green",
    border: "none",
    cursor: "pointer",
  }
  
const toggleButton = {
    padding: "7px 11px 7px 11px",
    fontSize: "18px",
    background: "yellow",
    border: "none",
    cursor: "pointer",
    margin: "0 15px 0 15px"
  }


function Todo( {todo, dispatch} ) {

    return (
        <div style={wrapper}>
            <span 
                style={{color: todo.complete? "#AAA" : "#000"}}>
                {todo.name}
            </span>
            <button 
                style={toggleButton}
                onClick={()=> dispatch({type: ACTIONS.TOGGLE_TODO, payload: {id: todo.id} })}>Toggle</button>
            <button 
                style={deleteButton}
                onClick={()=> dispatch({type: ACTIONS.DELETE_TODO, payload: {id: todo.id}})}
                >Delete</button>
        </div>
    )
}

export default Todo
