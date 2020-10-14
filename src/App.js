import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Checkout from './Checkout';
import './App.css';
import Header from './Header';
import Home from './Home';


function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/checkout">
        <Header />
        <Checkout />
        </Route>
        
        <Route path="/login">
        <h1>login</h1>
        </Route>
        
        <Route path="/">
          <Header />
          <Home />
        </Route>
        
        
      </Switch>
    </div>
    </Router>
  );
}

export default App;
