// через 'props' получаем значение 'tasks'
export default function Column(props){
	return (
		<div className="column">

		{props.tasks.map((task) => (
			<div className="task" key={task.id}>
				<h3>{task.title}</h3>
				<p>{task.status}</p>
				<p>{task.description}</p>
			</div>
		))}
    
		</div>
	)
}
