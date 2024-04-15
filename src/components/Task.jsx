export default function Task({
	children,
	handleStatus,
	handleEdit,
	handleDelete,
	status,
}) {
	return (
		<div className="bg-blue-700 text-white flex justify-between px-4 py-2 border-b-2">
				<TextTask status={status}>{children}</TextTask>
			<span className="flex items-center gap-2 ">
				<CheckBox status={status} fnc={handleStatus}></CheckBox>
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

function CheckBox({ status, fnc }) {
	if (status) {
		return (
			<span className="material-symbols-outlined bg-blue-800 rounded p-1 hover:cursor-pointer" onClick={fnc}>
				check_box
			</span>
		);
	} else {
		return (
			<span className="material-symbols-outlined bg-blue-800 rounded p-1 hover:cursor-pointer" onClick={fnc}>
				check_box_outline_blank
			</span>
		);
	}
}

function TextTask({status, children}){
	if(status){
		return(
			<div className="text-lg line-through text-blue-950">{children}</div>
		)
	}else{
		return(
			<div className="text-lg">{children}</div>
		)
	}
}