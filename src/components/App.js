import React, { Component } from 'react';
import {
  BrowserRouter,
  Route, 
  Switch, 
} from 'react-router-dom';

import Header from './Header';
import './App.css';
import Home from './Home/Home';
import About from './About';
import Resume from './Resume';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/resume" component={Resume}  />
            <Route exact path="/teachers"  />
            <Route path="/teachers/:topic/:teachersName" />
            <Route />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
