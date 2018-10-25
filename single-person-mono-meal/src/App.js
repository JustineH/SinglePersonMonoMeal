import React, { Component } from 'react';
import * as Scroll from 'react-scroll';
import logo from './logo.svg';
import './App.css';
import imageCerealAndMilk from './cereal-and-milk.svg'; 
import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
    return (
      <div className="docScroller">
        <div className="App">
          <header className="App-header">
          <img src={imageCerealAndMilk} className="App-logo" alt="logo" />
            <h2>
              Single Person Mono Meal 
            </h2>
          </header>
        </div>
        <div className="stepOne">
          <div className="inside">
            <h2>
              Step One: Grab a bowl
            </h2>
          </div>
        </div>
        <div className="stepTwo">
          <div className="inside">
            <h2>
              Step Two: Grab a spoon
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

