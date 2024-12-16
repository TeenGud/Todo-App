import { useId, useState } from 'react';
import './NewTaskForm.css';
const NewTaskForm = ({ tasks, setTasks }) => {
  const [value, setValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    setTasks([
      ...tasks,
      { description: value, time: new Date(), active: true, uniqKey: String(new Date()), hide: false },
    ]);
    setValue('');
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={value}
          onChange={e => setValue(e.target.value)}
          autoFocus
        />
      </form>
    </header>
  );
};

export default NewTaskForm;
