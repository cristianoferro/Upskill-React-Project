import React from 'react';
import { Route, Switch, useLocation } from "react-router-dom";
import Login from './components/Login';
import Initial from './components/Initial';
import { AnimatePresence } from 'framer-motion';
import "./styles/App.scss";
import MyKitchen from './components/sub_components/MyKitchen';
import Schedule from './components/sub_components/Schedule';
import Statistics from './components/sub_components/Statistics';
import Search from './components/sub_components/Search';
import ItemList from './components/sub_components/ItemList';

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
            <Route path="/mykitchen">
              <MyKitchen/>
            </Route>
            <Route path="/schedule">
              <Schedule/>
            </Route>
            <Route path="/search">
              <Search/>
            </Route>
            <Route path="/statistics">
              <Statistics/>
            </Route>
            <Route path="/item-list">
              <ItemList color="pink" items={items} setItems={setItems}/>
            </Route>
          </Switch>
        </AnimatePresence>
        
    </>
  );
}

export default App;