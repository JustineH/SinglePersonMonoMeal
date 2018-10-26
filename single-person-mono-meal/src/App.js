import React, { Component } from 'react';
import * as Scroll from 'react-scroll';
import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid';
import imageCerealAndMilk from './cereal-and-milk.svg'; 
import imageBowlOfCereal from './nyana-stoica-601258-unsplash.jpg';
import imageHungry from './noun_hungry_1926312.svg';
import imageBowl from './noun_Bowl_1460102.svg';
import imageCerealBox from './noun_Cereal Box Open_434709.svg';
import imageMilk from './milk-bottle.svg';
import imageSpoon from './noun_Spoon_1825509.svg';
import imageCerealAndBowl from './cereal-and-bowl.svg';
import imageEat from './noun_porridge_1997682.svg';
import Button from '@material-ui/core/Button';

class App extends Component {

  componentDidMount(args) {
    // super(args)
    document.querySelector(".docScroller")
    .addEventListener("scroll", (event) => {
      let scrollTop = event.target.scrollTop
      let images = document.querySelectorAll("img")
      images.forEach((image) => {
        // image.style.transform = "rotate(" + scrollTop + "deg)"
        image.style.transform = `rotate(${scrollTop*2}deg)`
      })
      console.log(scrollTop)
      console.log(images)

    })
  }

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
          <Grid item xs={12}>
          <div className="stepThree">
            <div className="inside">
            <img src={imageCerealBox} className="iconImage" />
              <h1>
                Step Three: Grab a box of your favourite cereal (or whatever you have in the pantry)
              </h1>
            </div>
          </div>
          </Grid>
          <Grid item xs={12}>
          <div className="stepFour">
            <div className="inside">
            <img src={imageMilk} className="iconImage" />
              <h1>
                Step Four: Pour milk into your bowl 
              </h1>
            </div>
          </div>
          </Grid>
          <Grid item xs={12}>
          <div className="stepFive">
            <div className="inside">
            <img src={imageEat} className="iconImage" />
              <h1>
                Step Five: Dig in!
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

