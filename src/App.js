import React from 'react';
import { Route, Switch } from "react-router-dom";
import Login from './components/Login';
import Initial from './components/Initial'

function App() {
  return (
    <>
        <Switch>
          <Route path="/">
            <Login/>
          </Route>
          <Route path="/initial">
            <Initial/>
          </Route>
        </Switch>
    </>
  );
}

export default App;
