import logo from './logo.svg';
import { Route } from 'react-router-dom';
import './App.css';
import './css/main.css';
import MainPage from './pages/MainPage';
import LayoutPage from './pages/LayoutPage';
import { useEffect, useState } from 'react';
import axios from '../node_modules/axios/index';
import CounterContainer from './container/CounterContainer';
import SampleContainer from './container/SampleContainer';

function App() {
  function* sumgenerator() {
    console.log('sumgenerator() 실행');
    let a = yield;
    let b = yield;
    yield a + b;
  }
  const sum = sumgenerator();
  sum.next();
  return (
    <div className="App">
      {/*<CounterContainer />*/}
      <SampleContainer />
      <Route component={MainPage} path="/" exact={true}></Route>
      <Route component={LayoutPage} path="/LayoutPage"></Route>
    </div>
  );
}

export default App;
