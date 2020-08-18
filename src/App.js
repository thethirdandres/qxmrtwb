import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navigation from './Components/Navigation.js';
import Home from './Components/Home.js';

function App() {
  return (
    <div className="App container-fluid">
      <Router>
        < Navigation />
        <main>

          <Switch>
            <Route exact path="/"> <Home /> </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
