import { useId, useState } from 'react';
import './NewTaskForm.css';
const NewTaskForm = ({ tasks, setTasks }) => {
  const [value, setValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (!value.trim().length) {
      return;
    }
    setTasks([
      ...tasks,
      { description: value, time: new Date(), active: true, uniqKey: String(Date.now()), hide: false },
    ]);
    setValue('');
  };

  return (
    <header className="header">
      <h1>todos with timer</h1>
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
