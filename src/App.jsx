import { useEffect, useState, useRef } from "react";
import Task from "./components/Task";
import Form from "./components/Form";
import Header from "./components/Header";

function App() {
	const [todo, setTodo] = useState(() => {
		let local = localStorage.getItem("TODO");
		return local ? JSON.parse(local) : [];
	});
	const [task, setTask] = useState("");
	const [edit, setEdit] = useState(false);
	const [editId, setEditId] = useState(0);

	const userRef = useRef(null);

	useEffect(() => {
		localStorage.setItem("TODO", JSON.stringify(todo));
	}, [todo]);

	function handleAddTodo(e) {
		e.preventDefault();
		if (task !== "" && edit === false) {
			setTodo([...todo, { id: +new Date(), task: task, status: false }]);
			setTask("");
		} else if (edit === true && task !== ""){
			setEdit(false);
			setTodo(
				todo.map((todo) =>
					todo.id === editId ? { ...todo, task: task } : todo
				)
			);
			setTask("");
		}
	}

	function handleDeleteTodo(todoId) {
		setTodo(todo.filter((e) => e.id !== todoId));
	}

	function handleStatusTodo(todoId) {
		setTodo(
			todo.map((task) =>
				task.id == todoId ? { ...task, status: !task.status } : task
			)
		);
	}

	function handleEditTodo(todoId) {
		userRef.current.focus();
		setEdit(true);
		const find = todo.find((todo) => todo.id == todoId);
		setTask(find.task);
		setEditId(todoId);
	}

	return (
		<div className="bg-slate-800 w-full h-screen flex flex-col items-center">
			<div className="bg-sky-400 flex flex-col px-7 py-7 items-center w-2/6 min-h-[70%]  mt-4 rounded">
				<Header></Header>
				<Form
					edit={edit}
					onChange={(e) => setTask(e.target.value)}
					handleAddTodo={handleAddTodo}
					task={task}
					userRef={userRef}
				/>
				<div className="flex flex-col w-full">
					{todo.map((todo) => (
						<Task
							key={todo.id}
							status={todo.status}
							handleDelete={() => handleDeleteTodo(todo.id)}
							handleStatus={() => handleStatusTodo(todo.id)}
							handleEdit={() => handleEditTodo(todo.id)}
						>
							{todo.task}
						</Task>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
