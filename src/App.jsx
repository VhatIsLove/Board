import { useState } from 'react';
import './App.scss'

import Column from './components/Column';
import Header from './components/Header';

const taskStatus = ['todo', 'progress', 'review', 'done']

const initialTask = [
	{id: 1, title: 'Задача 1', status: 'todo', description: 'Написать приложение с использованием React', priority: 1},
	{id: 2, title: 'Задача 2', status: 'progress', description: 'Продумать логику доски задач', priority: 3}
]

function App() {
	const [tasks, setTasks] = useState(initialTask)

  return (
      <div className='container'>

			<Header />

        <h1>Hello board</h1>

				<div className='row'>
					{taskStatus.map((status) =>(
						<Column key={status} status={status} tasks={tasks} />
					))}
					

				</div>

      </div>)
}

export default App
