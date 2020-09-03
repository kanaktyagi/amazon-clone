import React,{useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login'
import {auth} from './firebase'
import { useStateValue } from './StateProvider';

function App() {
  const [{basket}, dispatch] = useStateValue();

  useEffect(() => {
  const unSubscribe = auth.onAuthStateChanged(authuser =>{
     if(authuser) {
       //logged in
       dispatch({
         type: "SET_USER",
         user: authuser
       })
     }else {
       //logged out
       dispatch({
        type: "SET_USER",
        user: null
      })
     }
      return() =>{
        unSubscribe()
      }
   })
  }, [])

  return (
    <Router>
    <div className="app">
     <Switch>

     <Route path="/checkout">
     <Header/>
     <Checkout />
     </Route>

     <Route path="/login">
     <Login/>
     </Route>

     <Route path="/">
     <Header/>
     <Home />
     </Route>

     </Switch>
    </div>
    </Router>
  );
}

export default App;
