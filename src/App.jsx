import { useEffect, useState } from "react";
import Task from "./components/Task";

function App() {
	const [todo, setTodo] = useState([]);

	let [task, setTask] = useState("");

	function handleAddTodo() {
		setTodo([...todo, { id: +new Date(), task: task, status: false }]);
		setTask("");
	}

	function handleDeleteTodo(todoId) {
		setTodo(todo.filter((e) => e.id !== todoId));
	}

	function handleStatusTodo(todoId){
		let updateTodo = todo.map((todo)=> {
			if(todo.id === todoId){
				todo.status = !todo.status
			}
			return todo
		})
		setTodo(updateTodo)
	}

	return (
		<div className="bg-slate-800 w-full h-screen flex flex-col items-center">
			<div className="bg-sky-400 flex flex-col px-7 py-1 items-center w-2/6  mt-4 rounded">
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
				>
					Add Task
				</button>
				<div className="flex flex-col w-full">
					{todo.map((todo) => (
						<Task
							key={todo.id}
							handleDelete={() => handleDeleteTodo(todo.id)}
							status={todo.status}
							handleStatus={()=> handleStatusTodo(todo.id)}
						>{`${todo.task} | ${todo.id}`}</Task>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
