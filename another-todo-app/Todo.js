import React from "react";
import "./styles.css";

function Todo({ todo, toggleTodo }) {
	const handleTodoClick = () => {
		toggleTodo(todo.id);
	};
	return (
		<div className="todo">
			<label>
				<input
					type="checkbox"
					checked={todo.complete}
					onChange={handleTodoClick}
				/>
				{todo.name}
			</label>
		</div>
	);
}

export default Todo;
