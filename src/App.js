import React from 'react';
import { Route, Switch, useLocation } from "react-router-dom";
import Background from './components/Background';
import Login from './components/Login';
import Initial from './components/Initial';
import InterfaceContainer from './components/InterfaceContainer'
import { AnimatePresence } from 'framer-motion';
import "./styles/App.scss";
import MyKitchen from './components/MyKitchen';
import Schedule from './components/Schedule';
import Statistics from './components/Statistics';
import Search from './components/Search';
import Inventario from './components/sub_components/Inventario';
import { useState, useRef } from "react";
import { uuid } from 'uuidv4';


function App() {

  const location = useLocation();
  const inputRef = useRef(null);
  
  const [submit, setSubmit] = useState("submit");
  const [items, setItems] = useState([]);

  const submitClickHandler = (event) => {
        

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

  const useMenuClick = (event) => {

    // event.preventDefault();

  }

  return (
    <>          
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
            <Route path="/"exact>
              <Login/>
            </Route>
            <Route path="/initial">
              <Initial useMenuClick={useMenuClick} />
            </Route>
            <InterfaceContainer>
              <Route path="/mykitchen">
                <MyKitchen inputRef={inputRef} submitClickHandler={submitClickHandler} submit={submit} />
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
              <Route path="/inventário">
                <Inventario color="pink"
                            items={items} 
                            setItems={setItems}
                            inputRef={inputRef}
                            submitClickHandler={submitClickHandler}
                            submit={submit}/>
              </Route>
            </InterfaceContainer>
          </Switch>
        </AnimatePresence>

        
        <Background/>
        
    </>
  );
}

export default App;
