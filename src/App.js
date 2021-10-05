import logo from './logo.svg';
import { Route } from 'react-router-dom';
import './App.css';
import './css/main.css';
import MainPage from './pages/MainPage';
import LayoutPage from './pages/LayoutPage';
import { useEffect, useState } from 'react';
import axios from '../node_modules/axios/index';
import { usedispatch, useSelector } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Route component={MainPage} path="/" exact={true}></Route>
      <Route component={LayoutPage} path="/LayoutPage"></Route>
    </div>
  );
}

export default App;
