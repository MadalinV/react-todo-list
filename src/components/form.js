import React from "react";

const Form = ({ setInputText, inputText, todos, setTodos, setStatus }) => {
	const inputTextHendler = e => {
		setInputText(e.target.value);
	};
	const submitTodoHendler = e => {
		e.preventDefault();
		setTodos([
			...todos,
			{ text: inputText, completed: false, id: Math.random() * 1000 },
		]);
		setInputText("");
	};
	const statusHandler = e => {
		setStatus(e.target.value);
	};
	return (
		<form>
			<div className="form-top">
				<input
					value={inputText}
					onChange={inputTextHendler}
					type="text"
					className="todo-input"
					placeholder="Add Task"
				/>
				<button
					onClick={submitTodoHendler}
					className="todo-button"
					type="submit"
				>
					<i className="fas fa-plus-circle"></i>
				</button>
			</div>
			<div className="select">
				<select
					onChange={statusHandler}
					name="todos"
					className="filter-todo"
				>
					<option value="all">All</option>
					<option value="completed">Completed</option>
					<option value="uncompleted">Uncompleted</option>
				</select>
			</div>
		</form>
	);
};

export default Form;
