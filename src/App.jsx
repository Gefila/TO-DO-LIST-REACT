import { useState } from "react";
import Task from "./components/Task";

function App() {
	const [todo, setTodo] = useState([]);

	const [task, setTask] = useState("");

	const [edit, setEdit] = useState(false);
	const [editId, setEditId] = useState(0);

	function handleAddTodo() {
		if (task !== "" && edit === false) {
			setTodo([...todo, { id: +new Date(), task: task, status: false }]);
			setTask("");
		} else {
			setTodo(task);
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
		setEdit(true);
		const find = todo.find((todo) => todo.id == todoId);
		setTask(find.task);
		setEditId(todoId);
	}

	return (
		<div className="bg-slate-800 w-full h-screen flex flex-col items-center">
			<div className="bg-sky-400 flex flex-col px-7 py-1 items-center w-2/6 min-h-[70%]  mt-4 rounded">
				<div className="py-4">TO DO LIST</div>
				<form action=""></form>
				<input
					type="text"
					className="p-2 w-full rounded-t"
					placeholder="Example : Olahraga"
					onChange={(e) => setTask(e.target.value)}
					value={task}
				/>
				<button
					className="bg-blue-800 w-full p-2 text-white font-bold"
					onClick={handleAddTodo}
					name="btn"
				>
					{!edit ? "Add Task" : "Delete Task"}
				</button>
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
