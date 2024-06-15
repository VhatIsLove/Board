// через 'props' получаем значение 'tasks'
export default function Column(props){
	return (
		<div className="col">

		<h3>{props.status}</h3>
		{props.tasks.map((task) => (
			<div className="card mb-3" key={task.id}>
				<div className="card-body">
					<h5 className="card-title">{task.title}</h5>
					<p>{task.status}</p>
					<p>{task.description}</p>
				</div>
			</div>
		))}
    
		</div>
	)
}
