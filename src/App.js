import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Board from './components/Board';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/board">
          <Board />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
