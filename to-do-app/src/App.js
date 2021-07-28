import React, {useState} from 'react';
import './App.css';
import TodoForm from "./Components/TodoForm/TodoForm"
import TodoList from './Components/TodoList/TodoList';

const todo_dummy = [
  {
    id: 1,
    name: "Read a Book",
    status: true
  },
  {
    id: 2,
    name: "Write a review",
    status: true
  }
]

function App() {
  const [todoList, setTodoList] = useState(todo_dummy)

  // const addItemHandler = (item) => {
  //   setTodoList (
  //     (previous) => {
  //       return [...previous, {id: previous[previous.length] +1, name:item, status:false}]
  //     }
  //   )
  //   console.log(todoList) 
  // }

  const addItemHandler = (name) => {
    if (name==="") return
    setTodoList(previousTodos => {
      return [...previousTodos, {id: 5, name: name, status: false}]
    })
  }

  const clearCompleteHandler = () => {
    const newTodo = todoList.filter(todoList => todoList.status === true)
    setTodoList(newTodo)
  }
  return (
    <div>
      <TodoForm onSubmitListHandler = {addItemHandler} />
      <TodoList todoList = {todoList}/>
      <button type="submit" onClick={clearCompleteHandler}>clear complete</button>
    </div>
  );
}


export default App;
