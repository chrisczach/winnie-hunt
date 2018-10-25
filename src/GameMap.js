import React, { Component } from 'react';

const GameMap = (props) => {
  const flattenMap = [].concat(...props.map);
  const renderMap = flattenMap.map(cell => {
    let cellContent = props.win && cell.winnie ? "wonton winnie flaticon-pug" : cell.winnie ? "winnie flaticon-pug" : cell.tracked ? "paw flaticon-paw-print" : null;
    
    return <div className={`gameCell ${cellContent}` }onClick={props.winnieMove}> </div>
  })


  return (
    <div className="gameBoard">
      {renderMap}
    </div>
  )
}

//{cellContent === "wonton winnie flaticon-pug" ? <img src="./wonton.png" width="50px"  /> : null}

export default GameMap;