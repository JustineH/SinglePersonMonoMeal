import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
    return (
      <div className="docScroller">
        <div className="App">
          <header className="App-header">
            <h2>
              Single Person Mono Meal 
            </h2>
          </header>
        </div>
        <div className="stepOne">
          <div className="inside">
          </div>
        </div>
      </div>
    );
  }
}

export default App;
