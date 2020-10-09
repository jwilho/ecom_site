import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/checkout"></Route>
        <h1>Checkout</h1>

        <Route path="/login"></Route>
        <h1>login</h1>

        <Route path="/"></Route>
        <h1>HOME Page</h1>
        
      </Switch>
    </div>
    </Router>
  );
}

export default App;
