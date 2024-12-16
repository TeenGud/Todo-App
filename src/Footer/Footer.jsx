import './Footer.css';
import TasksFilter from '../TasksFilter';

const Footer = ({ tasks, setTasks }) => {
  const handleClearClick = () => {
    setTasks(tasks.filter(task => task.active));
  };
  const count = tasks.reduce((acc, task) => {
    if (task.active) {
      return 1 + acc;
    }
    return acc;
  }, 0);
  return (
    <footer className="footer">
      <span className="todo-count">{count} items left</span>
      <TasksFilter tasks={tasks} setTasks={setTasks} />
      <button className="clear-completed" onClick={handleClearClick}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
