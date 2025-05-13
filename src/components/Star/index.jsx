import { useState } from 'react';
import './style.css';

//hotovo
export const Star = ({ value, onSelect }) => {
  const [glowing, setGlowing] = useState(false);

  const handleClick = () => {
    setGlowing(true); // rozsvítíme hvězdu
    if (onSelect) {
      onSelect(value); // předáme hodnotu nahoru
    }
  };

  const starClass = glowing
    ? 'rating__star rating__star--on'
    : 'rating__star';

  return (
    <div className={starClass} onClick={handleClick}></div>
  );
};