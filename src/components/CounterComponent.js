import React from 'react';

function CounterComponent({ onIncrease, onDecrease, number }) {
  return (
    <div>
      {number}
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>+1</button>
    </div>
  );
}

export default CounterComponent;
