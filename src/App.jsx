import { useState } from 'react';
import './App.scss';

import Column from './components/Column';
import Header from './components/Header';
import CreateTaskForm from './components/CreateTask';

const taskStatus = ['todo', 'progress', 'review', 'done'];

const initialTask = [
  {
    id: 1,
    title: 'Задача 1',
    status: 'done',
    description: 'Начать новый проект',
    priority: 1,
  },
  {
    id: 2,
    title: 'Задача 2',
    status: 'progress',
    description: 'Продумать логику доски задач',
    priority: 3,
  },
  {
    id: 3,
    title: 'Задача 3',
    status: 'todo',
    description: 'Написать приложение с использованием React',
    priority: 1,
  },
  {
    id: 4,
    title: 'Задача 4',
    status: 'review',
    description: 'Добавить стили и сделать красоту',
    priority: 4,
  },
];

export default function App() {
  const [tasks, setTasks] = useState(initialTask);

  //проходим по всем таскам в 'useState', затем проверяем 'id' каждого элемента и если он равен тому что в событии 'onChange'  в 'select', тогда возвращаем новый объект
  const oneStatusChange = (id, newStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task,
      ),
    );
  };

  return (
    <div className="container">
      <Header />
      <CreateTaskForm />

      <h1>Hello board</h1>

      <div className="row">
        {taskStatus.map((status) => (
          <Column
            key={status}
            status={status}
            tasks={tasks}
            statuses={taskStatus}
            oneStatusChange={oneStatusChange}
          />
        ))}
      </div>
    </div>
  );
}
