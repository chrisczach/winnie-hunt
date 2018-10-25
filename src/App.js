import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameMap from './GameMap';
import Controls from './Controls';
import HomeSplash from './HomeSplash';
import Div100vh from 'react-div-100vh';

class App extends Component {
  state = {
    map: [],
    wontonLocation: null,
    winnieLocation: null,
    radar: null,
    steps: null,
    win: false
  }

  startGameHandler = () => {
    const map = [];
    for(let row = 0; row < 10; row++) {
      const rowArr = [];
      for(let cell = 0; cell < 10; cell++) {
        rowArr.push({winnie: false, wonton: false, tracked: false})
      }
      map.push(rowArr);
    };
    const wontonLocation = {x:Math.floor(Math.random()*10), y: Math.floor(Math.random()*10)};
    const winnieLocation = {x:0, y:0};
    const setWinnie = () => {
      const coords = {x:Math.floor(Math.random()*10), y: Math.floor(Math.random()*10)};
      if(wontonLocation.x === coords.x && wontonLocation.y === coords.y) { return setWinnie()}
       winnieLocation.x = coords.x; 
       winnieLocation.y = coords.y;

    };

    setWinnie();
    map[wontonLocation.y][wontonLocation.x] = {winnie: false, wonton: true, tracked: false};
    map[winnieLocation.y][winnieLocation.x] = {winnie: true, wonton: false, tracked: false};

    let radar = Math.abs(wontonLocation.x - winnieLocation.x) + Math.abs(wontonLocation.y - winnieLocation.y);
    let win = false;
    this.setState({
      map,
      wontonLocation,
      winnieLocation,
      radar,
      steps: 0,
      win
    })
  }

  moveWinnieHandler = (e) => {
    if(this.state.map.length === 0) {return};

    let steps = this.state.steps;
    const map = [...this.state.map];
    const oldWinnieLocation = {...this.state.winnieLocation};
    const winnieLocation = {...this.state.winnieLocation};
    const direction = e.target.value;
    const wontonLocation = {...this.state.wontonLocation};
    if(direction === "up") {winnieLocation.y -= 1};
    if(direction === "down") {winnieLocation.y += 1};
    if(direction === "left") {winnieLocation.x -= 1};
    if(direction === "right") {winnieLocation.x += 1};
    winnieLocation.x = Math.max(0, winnieLocation.x);
    winnieLocation.x = Math.min(9, winnieLocation.x);
    winnieLocation.y = Math.max(0, winnieLocation.y);
    winnieLocation.y = Math.min(9, winnieLocation.y);
    let radar = Math.abs(wontonLocation.x - winnieLocation.x) + Math.abs(wontonLocation.y - winnieLocation.y);

    console.log(e.target.value);
    console.log(winnieLocation);
    map[oldWinnieLocation.y][oldWinnieLocation.x] = {winnie: false, wonton: false, tracked: true};
    map[winnieLocation.y][winnieLocation.x] = {winnie: true, wonton: false, tracked: false};
    if(winnieLocation.x === oldWinnieLocation.x && winnieLocation.y === oldWinnieLocation.y) {
      return null
    } else {
      steps++
    };
    let win = false;
    if(wontonLocation.x === winnieLocation.x && wontonLocation.y === winnieLocation.y) {
      win = true;
    }
    
    this.setState({
      winnieLocation,
      map,
      radar,
      steps,
      win
    });
    

  }
  
  render() {
    return (
      <Div100vh>
      <HomeSplash startGameHandler={this.startGameHandler} state={this.state} />
      


      <div className="headerfooter">
      <button onClick={this.startGameHandler} className="startButton">Start a new Game</button> 
      <div className="headerText">
      {this.state.win ? null : `Go Winnie Go!! ${this.state.radar} steps from 🥟!`}
      </div>
      </div>
      
      <GameMap win={this.state.win} map={this.state.map} winnieMove={this.moveWinnieHandler}/>
      <Controls moveWinnie={this.moveWinnieHandler}/>
      </Div100vh>
    );
  }
}

export default App;
