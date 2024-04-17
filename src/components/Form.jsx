export default function Form({ task, edit, handleAddTodo, onChange }) {
	return (
		<form className="w-full">
			<input
				type="text"
				className="p-2 w-full rounded-t"
				placeholder="Example : Olahraga"
				onChange={onChange}
				value={task}
			/>
			<button
				className="bg-blue-800 w-full p-2 text-white font-bold"
				onClick={handleAddTodo}
				name="btn"
                type="submit"
			>
				{!edit ? "Add Task" : "Edit Task"}
			</button>
		</form>
	);
}
