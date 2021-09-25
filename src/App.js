import logo from './logo.svg';
import { Route } from 'react-router-dom';
import './App.css';
import './css/main.css';
import MainPage from './pages/MainPage';
import LayoutPage from './pages/LayoutPage';

function App() {
  return (
    <div className="App">
      <Route component={MainPage} path="/"></Route>
      <Route component={LayoutPage} path="/LayoutPage"></Route>
    </div>
  );
}

export default App;
