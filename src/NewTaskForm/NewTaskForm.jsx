import { useId, useState } from 'react';
import './NewTaskForm.css';
const NewTaskForm = ({ tasks, setTasks }) => {
  const [value, setValue] = useState('');
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const handleSubmit = e => {
    e.preventDefault();
    if (!value.trim().length) {
      return;
    }
    if (!Number.isInteger(Number(minutes)) || !Number.isInteger(Number(seconds))) {
      return;
    }
    setTasks([
      ...tasks,
      {
        description: value,
        time: new Date(),
        active: true,
        uniqKey: String(Date.now()),
        hide: false,
        minutes,
        seconds,
      },
    ]);
    setValue('');
    setMinutes(0);
    setSeconds(0);
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
      <input
        className="new-todo-form__timer"
        onChange={e => setMinutes(e.target.value)}
        value={minutes}
        placeholder="Min"
        autoFocus
      />
      <input
        className="new-todo-form__timer"
        onChange={e => setSeconds(e.target.value)}
        value={seconds}
        placeholder="Sec"
        autoFocus
      />
    </header>
  );
};

export default NewTaskForm;
