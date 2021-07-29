import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import "./styles.css";

const LOCAL_STORAGE_KEY = "todoApp.todos";

function App() {
	const todoNameRef = useRef();
	const todoList = [
		{
			id: Math.random(),
			name: "Read a book",
			complete: false,
		},
	];
	const [todos, setTodos] = useState(todoList);

	useEffect(() => {
		const storedTodos = JSON.parse(
			localStorage.getItem(LOCAL_STORAGE_KEY)
		);
		if (storedTodos) setTodos(storedTodos);
	}, []);

	useEffect(() => {
		localStorage.setItem(
			LOCAL_STORAGE_KEY,
			JSON.stringify(todos)
		);
	}, [todos]);

	const toggleTodo = (id) => {
		const newTodos = [...todos];
		const todo = newTodos.find((todo) => todo.id === id);
		todo.complete = !todo.complete;
		setTodos(newTodos);
	};

	const handleAddTodo = (event) => {
		const name = todoNameRef.current.value;
		setTodos((previousTodo) => {
			return [
				...previousTodo,
				{
					id: Math.random(),
					name: name,
					complete: false,
				},
			];
		});

		todoNameRef.current.value = "";
	};

	const numberOfCompleteTodos = todos.filter(
		(todo) => !todo.complete
	).length;

	const clearCompletedTodosHandler = () => {
		const newTodos = todos.filter((todo) => !todo.complete);
		setTodos(newTodos);
	};

	return (
		<div className="card">
			<div className="todolist">
				<TodoList
					toggleTodo={toggleTodo}
					todos={todos}
				/>
			</div>
			<input
				className="input"
				ref={todoNameRef}
				type="text"
			/>
			<div className="buttons">
				<button
					type="submit"
					className="button"
					onClick={handleAddTodo}
				>
					Add New Todo
				</button>
				<button
					className="button"
					onClick={
						clearCompletedTodosHandler
					}
				>
					Clear Completed Todos
				</button>
			</div>
			<div className="todo">
				You have {numberOfCompleteTodos} things
				left to do
			</div>
		</div>
	);
}

export default App;
