import React from 'react';
import { Route, Switch, useLocation } from "react-router-dom";
import Login from './components/Login';
import Initial from './components/Initial';
import { AnimatePresence } from 'framer-motion';
import "./styles/App.scss";

function App() {
  
  // give the location of the router
  const location = useLocation();

  return (
    <>  
        {/* Animates when page disappears */}
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
            <Route path="/"exact>
              <Login/>
            </Route>
            <Route path="/initial">
              <Initial/>
            </Route>
          </Switch>
        </AnimatePresence>
        
    </>
  );
}

export default App;
