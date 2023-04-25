import React from 'react';

const Controls = ({ onIncrement, onDecrement }) => (
  <div className="Counter__controls">
    <button type="button" onClick={onIncrement}>
      Increment for 1
    </button>
    <button type="button" onClick={onDecrement}>
      Decrement for 1
    </button>
  </div>
);

export default Controls;
