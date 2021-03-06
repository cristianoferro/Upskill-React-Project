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
import { useState, useRef } from "react";
import { uuid } from 'uuidv4';


function App() {

  const location = useLocation();
  
  const[submit, setSubmit] = useState("submit");
    const [items, setItems] = useState([]);

    const submitClickHandler = (event) => {
        const inputRef = useRef(null)

        event.preventDefault();
        setSubmit("Submitted");

        const itemObject = {
        id: uuid(),
        text: inputRef.current.value,
        liked: false
        }

        inputRef.current.value = "";
        const newItems = [...items, itemObject]
        setItems(newItems)
  }

  return (
    <>  
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