import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navigation from './Components/Navigation.js';
import ToggleNavigation from './Components/ToggleNavigation.js';
import Home from './Components/Home.js';
import Footer from './Components/Footer.js';
import StoreLocator from './Components/StoreLocator';

// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class App extends React.Component {
  render() {
    return (
      <div className="App container-fluid">
        <Router basename="/qxmrtwb">
          <nav className="navigation-section   position-fixed bg-white">
            <Navigation />
          </nav>
          
          <ToggleNavigation />
          <main>
            <Switch>
              <Route exact path="/"> <Home /> </Route>
              <Route exact path="/store-locator"> <StoreLocator /> </Route>
            </Switch>
            <Footer />
            
          </main>
          {/* <Footer className="footer-section"/> */}
        </Router>
      </div>
    );
  }
}

export default App;
