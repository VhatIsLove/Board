import { useState } from 'react';
import './App.scss'

import Column from './components/Column';
import Header from './components/Header';

// const taskStatus = ['todo', 'progress', 'review', 'done']

const initialTask = [
	{id: 1, title: 'Задача 1', status: 'todo', description: 'Описание задачи 1', priority: 1},
	{id: 2, title: 'Задача 2', status: 'progress', description: 'Описание задачи 2', priority: 3}
]

function App() {
	const [tasks, setTasks] = useState(initialTask)
	console.log(initialTask);
  return (
      <div >
			<Header />
        <h1>Hello board</h1>
				<Column tasks={tasks} />
      </div>)
}

export default App
