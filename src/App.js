import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navigation from './Components/Navigation.js';
import ToggleNavigation from './Components/ToggleNavigation.js';
import Home from './Components/Home.js';

class App extends React.Component {
  render() {
    return (
      <div className="App container-fluid">
        <Router>
          <nav className="navigation-section   position-fixed bg-white">
            <Navigation />
          </nav>
          {/* <ToggleNavigation /> */}
          <main>

            <Switch>
              <Route exact path="/"> <Home /> </Route>
            </Switch>
          </main>
        </Router>
      </div>
    );
  }
}

export default App;
