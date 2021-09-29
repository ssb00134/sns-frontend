import React from 'react';
import { connect } from 'react-redux';
import { increase, decrease } from '../modules/counter';
import CounterComponent from '../components/CounterComponent';

function CounterContainer({ number, increase, decrease }) {
  return (
    <CounterComponent
      number={number}
      onIncrease={increase}
      onDecrease={decrease}
    />
  );
}

export default connect((state) => ({ number: state.counter }), {
  increase,
  decrease,
})(CounterContainer);
