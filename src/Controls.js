import React, { Component } from 'react';

const Controls = (props) => {


  return (
<div className="controls headerfooter">
<button value="left" className="controlButton" onClick={props.moveWinnie}>
&larr;
</button>
<div className="centerControls">
<button value="up" className="controlButton" onClick={props.moveWinnie}>
&uarr;
</button>

<button value="down" className="controlButton" onClick={props.moveWinnie}> 
&darr;
</button>
</div>
<button value="right" className="controlButton" onClick={props.moveWinnie}>
  &rarr;
</button>
</div>
  )
}

export default Controls;