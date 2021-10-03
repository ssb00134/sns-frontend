import React from 'react';
import postSlice from '../modules/post';
import rootReducer from '../modules';
import { useSelector } from 'react-redux';

function SampleComponent() {
  const { post } = useSelector((state) => state.post);
  return <div></div>;
}

export default SampleComponent;
