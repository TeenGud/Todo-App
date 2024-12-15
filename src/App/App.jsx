import './App.css';
import Footer from '../Footer';
import NewTaskForm from '../NewTaskForm';
import TaskList from '../TaskList';
import { useState } from 'react';
import { useId } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([
    { description: 'Have a beer', time: new Date(), active: true, uniqKey: useId(), hide: false },
    { description: 'Drink vodka', time: new Date(), active: true, uniqKey: useId(), hide: false },
    { description: 'Suicide', time: new Date(), active: true, uniqKey: useId(), hide: false },
  ]);
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
