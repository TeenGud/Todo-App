import { useEffect, useState } from 'react';
import './Timer.css';
const Timer = ({ timer, setTimer, icon, setIcon, isRunning, setIsRunning }) => {
  const handleClick = e => {
    const iconState = e.target.classList[1];
    if (iconState === 'icon-play') {
      setIsRunning(true);
      setIcon('icon-pause');
    } else if (iconState === 'icon-pause') {
      setIsRunning(false);
      setIcon('icon-play');
    }
  };
  const minutes =
    Math.floor((timer / 60) % 60) < 10 ? `0${Math.floor((timer / 60) % 60)}` : `${Math.floor((timer / 60) % 60)}`;
  const seconds = Math.floor(timer % 60) < 10 ? `0${Math.floor(timer % 60)}` : `${Math.floor(timer % 60)}`;
  const hours = Math.floor(timer / 3600) < 10 ? `0${Math.floor(timer / 3600)}` : `${Math.floor(timer / 3600)}`;
  return (
    <span className="description-timer">
      <button className={`icon ${icon}`} onClick={handleClick} />
      {`${hours}:${minutes}:${seconds}`}
    </span>
  );
};

export default Timer;
