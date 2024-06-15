// через 'props' получаем значение 'tasks'
export default function Column(props){
	return (
		<div className="col">

		<h3>{props.status}</h3>
		{props.tasks
		.filter((task) => task.status === props.status)
		.map((task) => (
			<div className="card mb-3" key={task.id}>
				<div className="card-body">
					<h5 className="card-title">{task.title}</h5>
					<p>{task.status}</p>
					<p>{task.description}</p>

					<select 
						className="form-select" 
						aria-label="Default select example"
						defaultValue={props.status}
						onChange={(e) => props.oneStatusChange(task.id, e.target.value)}>

							{props.statuses.map((status) => (
								<option 
									key={status} 
									value={status}>
										{status}
									</option>
							))}

					</select>
				</div>
			</div>
		))}
    
		</div>
	)
}
