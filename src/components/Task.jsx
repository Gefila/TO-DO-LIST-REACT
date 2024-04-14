export default function Task({children,handleDone,handleEdit,handleDelete}) {
	return (
		<div className="bg-blue-700 text-white flex justify-between px-4 py-2 border-b-2">
			<div className="text-lg">{children}</div>
			<span className="flex items-center gap-2 ">
				<span
					className="material-symbols-outlined bg-blue-800 rounded p-1 hover:cursor-pointer"
					onClick={handleDone}
				>
					done
				</span>
				<span
					className="material-symbols-outlined bg-blue-800 rounded p-1 hover:cursor-pointer"
					onClick={handleEdit}
				>
					edit
				</span>
				<span
					className="material-symbols-outlined bg-blue-800 rounded p-1 hover:cursor-pointer"
					onClick={handleDelete}
				>
					delete
				</span>
			</span>
		</div>
	);
}
