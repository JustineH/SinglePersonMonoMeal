import React, { Component } from 'react';
import * as Scroll from 'react-scroll';
import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid';
import imageCerealAndMilk from './cereal-and-milk.svg'; 
import imageBowlOfCereal from './nyana-stoica-601258-unsplash.jpg';
import imageHungry from './noun_hungry_1926312.svg';
import imageBowl from './noun_Bowl_1460102.svg';
import imageMilk from './milk.svg';
import imageSpoon from './noun_Spoon_1825509.svg';
import imageCerealAndBowl from './cereal-and-bowl.svg';
import imageCerealWhite from './cereal-white.svg';
import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
    return (
      <Grid container spacing={24}>
        <div className="docScroller">
          <Grid item xs={12}>
            <div className="App">
              <header className="App-header">
              <img src={imageCerealAndMilk} className="App-logo" alt="logo" />
                <h2>
                  Single Person Mono Meal 
                </h2>
              </header>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="hungry">
              <div className="inside">
              <img src={imageHungry} className="iconImage" />
                <h1>
                  Hunger
                </h1>
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
          <div className="stepOne">
            <div className="inside">
              <h1>
                Step One: Grab a bowl
              </h1>
              <img src={imageBowl} className="iconImage" />
            </div>
          </div>
          </Grid>
          <Grid item xs={12}>
          <div className="stepTwo">
            <div className="inside">
            <img src={imageSpoon} className="iconImage" />
              <h1>
                Step Two: Grab a spoon
              </h1>
            </div>
          </div>
          </Grid>
        </div>
      </Grid>
    );
  }
}

export default App;

