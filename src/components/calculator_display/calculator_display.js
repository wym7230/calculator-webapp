import React from 'react';
import './calculator_display.css';

const Display = ({ ans, current }) => {
  return (
    <div className="display f2 d-flex flex-column">
      <div className="display-cell">Ans = {ans}</div>
      <div className="display-cell">{current}</div>
    </div>
  );
};

export { Display };
