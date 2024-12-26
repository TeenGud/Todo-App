import { useEffect, useState } from 'react';
import { formatDistanceToNowStrict } from 'date-fns';
import PropTypes from 'prop-types';

import './Task.css';
import Timer from '../Timer';

const Task = ({ description, tasks, setTasks, active, time, handleDestroy, id, uniqId, hide, minutes, seconds }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editText, setEditText] = useState(description);
  const [timePassed, setTimePassed] = useState(formatDistanceToNowStrict(time));

  const [icon, setIcon] = useState('icon-play');
  const [timer, setTimer] = useState(Number(minutes) * 60 + Number(seconds));
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const timerID = setInterval(() => {
      setTimePassed(formatDistanceToNowStrict(time));
    }, 1000);
    return () => clearInterval(timerID);
  }, [timePassed]);
  const handleChange = e => {
    if (active) {
      setTasks([
        ...tasks.slice(0, id),
        { description, time, active: false, uniqKey: uniqId, hide: false, timer, minutes, seconds },
        ...tasks.slice(id + 1),
      ]);
      setIsRunning(false);
      setIcon('icon-play');
    } else {
      setTasks([
        ...tasks.slice(0, id),
        { description, time, active: true, uniqKey: uniqId, hide: false, timer, minutes, seconds },
        ...tasks.slice(id + 1),
      ]);
    }
  };
  useEffect(() => {
    if (Number(minutes) > 0 || Number(seconds) > 0) {
      let interval;
      if (isRunning) {
        interval = setInterval(() => {
          if (timer > 0) {
            setTimer(prevTime => {
              if (prevTime > 0) {
                return prevTime - 1;
              }
              return 0;
            });
          }
        }, 1000);
      } else if (!isRunning || timer === 0) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTimer(prevTime => prevTime + 1);
      }, 1000);
    } else if (!isRunning) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleEdit = () => {
    if (!active) {
      return;
    }
    setIsEdit(!isEdit);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (!editText.trim().length) {
      return;
    }
    setTasks([
      ...tasks.slice(0, id),
      { description: editText, time, active: true, uniqKey: uniqId, hide: false, timer, minutes, seconds },
      ...tasks.slice(id + 1),
    ]);
    setIsEdit(false);
  };
  return !hide ? (
    <li className={isEdit ? 'editing' : active ? 'active' : 'completed'}>
      <div className="view">
        <input className="toggle" type="checkbox" onChange={handleChange} checked={!active} />
        <label>
          <Timer
            timer={timer}
            setTimer={setTimer}
            icon={icon}
            setIcon={setIcon}
            isRunning={isRunning}
            setIsRunning={setIsRunning}
          />
          <span className="description">{description}</span>
          <span className="created">created {timePassed}</span>
        </label>
        <button className="icon icon-edit" onClick={handleEdit} />
        <button className="icon icon-destroy" onClick={() => handleDestroy(uniqId)} />
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" className="edit" value={editText} onChange={e => setEditText(e.target.value)} />
      </form>
    </li>
  ) : (
    <></>
  );
};

Task.defaultProps = {
  active: true,
  time: new Date(),
  hide: false,
};
Task.propTypes = {
  description: PropTypes.string,
  active: PropTypes.bool,
  time: PropTypes.any,
  handleDestroy: id => {},
  id: PropTypes.number,
  uniqId: PropTypes.any,
  hide: PropTypes.bool,
};

export default Task;
