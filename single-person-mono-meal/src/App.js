import React, { Component } from 'react';
import * as Scroll from 'react-scroll';
import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid';
import imageCerealAndMilk from './cereal-and-milk.svg'; 
import imageHungry from './noun_hungry_1926312.svg';
import imageBowl from './noun_Bowl_1460102.svg';
import imageCerealBox from './noun_Cereal_Box_Open_434709.svg';
import imageMilk from './milk-bottle.svg';
import imageSpoon from './noun_Spoon_1825509.svg';
import imageCerealAndBowl from './cereal-and-bowl.svg';
import imageEat from './noun_porridge_1997682.svg';
import imageHappy from './noun_jump_1682137.svg';
import Button from '@material-ui/core/Button';

class App extends Component {

  componentDidMount(args) {
    document.querySelector(".docScroller")
    .addEventListener("scroll", (event) => {
      let scrollTop = event.target.scrollTop
      let images = document.querySelectorAll("img")
      images.forEach((image) => {
        image.style.transform = `rotateZ(${scrollTop/10 % 3}deg)`
      })
      console.log(scrollTop)
      console.log(images)
    })
  }

  render() {
    return (
      <Grid container>
        <div className="docScroller">
          <Grid item xs={12}>
            <div className="App">
              <header className="App-header">
              <img src={imageCerealAndMilk} className="App-logo" alt="logo" />
                <h1>
                  Single Person Mono Meal 
                </h1>
              </header>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="hungry">
              <div className="inside">
                <h1>
                  Hunger
                </h1>
                <img src={imageHungry} className="iconImage" />
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
          <div className="stepOne">
            <div className="inside">
              <h1>
                Step One: 
              </h1>
              <h2>
                Grab a bowl
              </h2>
              <img src={imageBowl} className="iconImage" />
            </div>
          </div>
          </Grid>
          <Grid item xs={12}>
          <div className="stepTwo">
            <div className="inside">
              <h1>
                Step Two: 
              </h1>
              <h2>
                Grab a spoon
              </h2>
              <img src={imageSpoon} className="iconImage" />
            </div>
          </div>
          </Grid>
          <Grid item xs={12}>
          <div className="stepThree">
            <div className="inside">
              <h1>
                Step Three: 
              </h1>
              <h2>
                Grab a box of your favourite cereal
              </h2>
              <img src={imageCerealBox} className="iconImage" />
            </div>
          </div>
          </Grid>
          <Grid item xs={12}>
          <div className="stepFour">
            <div className="inside">
              <h1>
                Step Four: 
              </h1>
              <h2>
                Pour milk onto cereal
              </h2>
              <img src={imageMilk} className="iconImage" />
            </div>
          </div>
          </Grid>
          <Grid item xs={12}>
          <div className="stepFive">
            <div className="inside">
              <h1>
                Step Five: 
              </h1>
              <h2>
                Dig in!
              </h2>
              <img src={imageEat} className="iconImage" />
            </div>
          </div>
          </Grid>
          <Grid item xs={12}>
          <div className="stepSix">
            <div className="inside">
              <h1>
                Step Six:
              </h1>
              <h2>
                See Step One
              </h2>
              <img src={imageHappy} className="iconImage" />
            </div>
          </div>
          </Grid>
        </div>
      </Grid>
    );
  }
}

export default App;

