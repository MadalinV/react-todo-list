import React, { useState, useEffect } from "react";
import "./App.css";
import DateTime from "./components/DateTime";

//import components
import Form from "./components/form";
import ToDoList from "./components/TodoList";

function App() {
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);
	const [status, setStatus] = useState("all");
	const [filtreredTodos, setFiltreredTodos] = useState([]);
  

	//use effect
	useEffect(() => {
		const getLocalTodos = () => {
			if (localStorage.getItem("todos") === null) {
				localStorage.setItem("todos", JSON.stringify([]));
			} else {
				let todoLocal = JSON.parse(localStorage.getItem("todos"));
				setTodos(todoLocal);
			}
		};
		getLocalTodos();
	}, []);
	useEffect(() => {
		const filterHandler = () => {
			switch (status) {
				case "completed":
					setFiltreredTodos(todos.filter(todo => todo.completed));
					break;
				case "uncompleted":
					setFiltreredTodos(todos.filter(todo => !todo.completed));
					break;
				default:
					setFiltreredTodos(todos);
					break;
			}
		};
		filterHandler();
		const saveLocalTodos = () => {
			localStorage.setItem("todos", JSON.stringify(todos));
		};
		saveLocalTodos();
	}, [todos, status]);

	return (
		<div className="App">
			<header>
				<h1>ToDo</h1>
			</header>
			<div className="content">
        <DateTime />
				<Form
					inputText={inputText}
					todos={todos}
					setTodos={setTodos}
					setInputText={setInputText}
					setStatus={setStatus}
				/>
				<ToDoList
					todos={todos}
					setTodos={setTodos}
					filtreredTodos={filtreredTodos}
				/>
			</div>
		</div>
	);
}

export default App;
