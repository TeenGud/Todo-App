import { useState, useId } from 'react';
import './App.css';

import Footer from '../Footer';
import NewTaskForm from '../NewTaskForm';
import TaskList from '../TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const handleDestroy = key => {
    setTasks(tasks.filter(task => task.uniqKey !== key));
  };
  return (
    <section className="todoapp">
      <NewTaskForm tasks={tasks} setTasks={setTasks} />
      <section className="main">
        <TaskList tasks={tasks} setTasks={setTasks} handleDestroy={handleDestroy} />
        <Footer tasks={tasks} setTasks={setTasks} />
      </section>
    </section>
  );
};

export default App;
