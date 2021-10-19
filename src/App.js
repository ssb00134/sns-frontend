import logo from './logo.svg';
import { Route } from 'react-router-dom';
import './App.css';
import './css/main.css';
import MainPage from './pages/MainPage';
import LayoutPage from './pages/LayoutPage';
import axios from '../node_modules/axios/index';
import { useDispatch, useSelector } from 'react-redux';

import { fetchTwits, twitsSelector, contentSelector } from './modules/twits';
import { useEffect, useState } from 'react';

function App() {
  // initialize the redux hook
  const dispatch = useDispatch();
  const { twits, loading, hasErrors } = useSelector(twitsSelector);
  const { content } = useSelector(contentSelector);

  // dispatch our thunk when component first mounts
  useEffect(() => {
    dispatch(fetchTwits());
  }, [dispatch]);
  console.log('twits : ', twits);
  console.log('content : ', content);
  const rendertwits = () => {
    if (loading) return <p>Loading recipes...</p>;
    if (hasErrors) return <p>Cannot display recipes...</p>;

    return '';
    //return twits.recipes.map((recipe) => <p>{recipe}</p>);
  };

  return (
    <div className="App">
      <section>
        <div className="content">{rendertwits()}</div>
      </section>
      {/*<div className="test">
    <Route component={MainPage} path="/" exact={true}></Route>
      <Route component={LayoutPage} path="/LayoutPage"></Route>
</div>*/}
      <MainPage />
      <LayoutPage />
    </div>
  );
}

export default App;
