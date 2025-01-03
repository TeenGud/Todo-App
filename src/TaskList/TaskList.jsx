import './TaskList.css';
import Task from '../Task/Task';

const TaskList = ({ tasks, setTasks, handleDestroy }) => {
  const elements = tasks.map((task, id) => (
    <Task
      tasks={tasks}
      setTasks={setTasks}
      description={task.description}
      active={task.active}
      time={task.time}
      key={task.uniqKey}
      handleDestroy={handleDestroy}
      id={id}
      uniqId={task.uniqKey}
      hide={task.hide}
      minutes={task.minutes}
      seconds={task.seconds}
    />
  ));
  return <ul className="todo-list">{elements}</ul>;
};

export default TaskList;
