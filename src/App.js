import logo from './logo.svg';
import { Route } from 'react-router-dom';
import './App.css';
import './css/main.css';
import MainPage from './pages/MainPage';
import LayoutPage from './pages/LayoutPage';
import { useEffect, useState } from 'react';
import axios from '../node_modules/axios/index';

function App() {
  const getPath = (path) => {
    axios.get(`http://localhost:4000${path}`).then((res) => {
      setData(res.data);
      console.log('data', data);
    });
  };
  const [data, setData] = useState('');

  useEffect(() => {
    getPath('/');
  }, []);
  //getPath('/');

  return (
    <div className="App">
      <Route component={MainPage} path="/" exact={true} props={setData}></Route>
      <Route component={LayoutPage} path="/LayoutPage"></Route>
    </div>
  );
}

export default App;
