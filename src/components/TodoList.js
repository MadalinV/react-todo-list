import React from "react";
//import Components
import Todo from "./Todo";

const ToDoList = ({ todos, setTodos, filtreredTodos }) => {
	return (
		<div className="todo-container">
			<ul className="todo-list">
				{filtreredTodos.map(todo => (
					<Todo
						text={todo.text}
						key={todo.id}
						todos={todos}
						setTodos={setTodos}
						todo={todo}
					/>
				))}
			</ul>
		</div>
	);
};

export default ToDoList;
