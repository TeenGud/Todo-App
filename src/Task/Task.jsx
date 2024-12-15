import { useState } from 'react';
import './Task.css';
import { formatDistanceToNowStrict } from 'date-fns';
import PropTypes from 'prop-types';

const Task = ({ description, tasks, setTasks, active, time, handleDestroy, id, uniqId, hide }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editText, setEditText] = useState(description);
  const handleChange = e => {
    if (active) {
      setTasks([
        ...tasks.slice(0, id),
        { description, time, active: false, uniqKey: uniqId, hide: false },
        ...tasks.slice(id + 1),
      ]);
    } else {
      setTasks([
        ...tasks.slice(0, id),
        { description, time, active: true, uniqKey: uniqId, hide: false },
        ...tasks.slice(id + 1),
      ]);
    }
  };
  const handleEdit = () => {
    if (!active) {
      return;
    }
    setIsEdit(!isEdit);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setTasks([
      ...tasks.slice(0, id),
      { description: editText, time, active: true, uniqKey: uniqId, hide: false },
      ...tasks.slice(id + 1),
    ]);
    setIsEdit(false);
  };
  return !hide ? (
    <li className={isEdit ? 'editing' : active ? 'active' : 'completed'}>
      <div className="view">
        <input className="toggle" type="checkbox" onChange={handleChange} checked={!active} />
        <label>
          <span className="description">{description}</span>
          <span className="created">created {formatDistanceToNowStrict(time)}</span>
        </label>
        <button className="icon icon-edit" onClick={handleEdit}></button>
        <button className="icon icon-destroy" onClick={() => handleDestroy(uniqId)}></button>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" className="edit" value={editText} onChange={e => setEditText(e.target.value)}></input>
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
