import React, { Component } from 'react';

const Controls = (props) => {


    return (
        <div className={`splash ${props.state.map.length === 0 || props.state.win ? "slideDown" : null}`}>
        <h1>Winnie Hunt</h1>
        <h2>Wonton Edition</h2>
        <div className="splashText">
        <h4>{props.state.win ? "Congratulations!" : null}</h4>
        <h5>{props.state.win ? `Winnie found Wonton in ${props.state.steps} steps` : null}</h5>
        
        </div>
        <button onClick={props.startGameHandler} className="startButton">{props.state.win ? "Find more Wontons 🥟" : "Go find Wonton 🥟"}</button> 
        </div>
    )

}

export default Controls;
