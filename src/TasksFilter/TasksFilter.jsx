import { useState } from 'react';
import './TasksFilter.css';
const TasksFilter = ({ tasks, setTasks }) => {
  const [allButton, setAllButton] = useState('selected');
  const [activeButton, setActiveButton] = useState('');
  const [completedButton, setCompletedButton] = useState('');
  const allTasks = tasks.map(task => ({ ...task, hide: false }));
  const activeTasks = tasks.map(task => {
    if (task.active) {
      return { ...task, hide: false };
    }
    return { ...task, hide: true };
  });
  const completedTasks = tasks.map(task => {
    if (task.active) {
      return { ...task, hide: true };
    }
    return { ...task, hide: false };
  });
  const handleAllClick = () => {
    setAllButton('selected');
    setActiveButton('');
    setCompletedButton('');
    setTasks(allTasks);
  };
  const handleActiveClick = () => {
    setAllButton('');
    setActiveButton('selected');
    setCompletedButton('');
    setTasks(activeTasks);
  };
  const handleCompletedClick = () => {
    setAllButton('');
    setActiveButton('');
    setCompletedButton('selected');
    setTasks(completedTasks);
  };
  return (
    <ul className="filters">
      <li>
        <button className={allButton} onClick={handleAllClick}>
          All
        </button>
      </li>
      <li>
        <button className={activeButton} onClick={handleActiveClick}>
          Active
        </button>
      </li>
      <li>
        <button className={completedButton} onClick={handleCompletedClick}>
          Completed
        </button>
      </li>
    </ul>
  );
};

export default TasksFilter;
