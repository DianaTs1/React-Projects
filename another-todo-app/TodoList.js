import React from "react";
import Todo from "./Todo";
import "./styles.css";

function TodoList(props) {
	return props.todos.map((todo) => {
		return (
			<Todo
				key={todo.id}
				todo={todo}
				toggleTodo={props.toggleTodo}
			/>
		);
	});
}

export default TodoList;
