import { useState } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
const defaultTasks = [

];

const uniqueId = () => Math.floor(Math.random() * Date.now());

export default function App() {
  const [tasks, setTasks] = useState(defaultTasks);

  const completeTaskHandler = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      const completed = !task.completed;
      return task.id === taskId ? { ...task, completed } : task;
    });
    setTasks(updatedTasks);
  };

  const deleteTaskHandler = (taskId) => {
    setTasks(tasks.filter(({ id }) => taskId !== id));
  };

  const newTaskHandler = (label) => {
    const newTask = {
      id: uniqueId(),
      completed: false,
      label,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      <AddTask newTaskHandler={newTaskHandler} />
      <TaskList
        tasks={tasks}
        completeTaskHandler={completeTaskHandler}
        deleteTaskHandler={deleteTaskHandler}
      />
    </div>
  );
}
