(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,n){t.exports=n(21)},15:function(t,e,n){},18:function(t,e,n){t.exports=n.p+"static/media/logo.5d5d9eef.svg"},19:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),i=n(4),r=n.n(i),l=(n(15),n(2)),c=n(1),s=n(5),m=n(6),u=n(8),w=n(7),d=n(9),h=(n(18),n(19),function(t){var e,n=(e=[]).concat.apply(e,Object(c.a)(t.map)).map(function(e){var n=t.win&&e.winnie?"wonton winnie flaticon-pug":e.winnie?"winnie flaticon-pug":e.tracked?"paw flaticon-paw-print":null;return o.a.createElement("div",{className:"gameCell ".concat(n),onClick:t.winnieMove}," ")});return o.a.createElement("div",{className:"gameBoard"},n)}),v=function(t){return o.a.createElement("div",{className:"controls headerfooter"},o.a.createElement("button",{value:"left",className:"controlButton",onClick:t.moveWinnie},"\u2190"),o.a.createElement("div",{className:"centerControls"},o.a.createElement("button",{value:"up",className:"controlButton",onClick:t.moveWinnie},"\u2191"),o.a.createElement("button",{value:"down",className:"controlButton",onClick:t.moveWinnie},"\u2193")),o.a.createElement("button",{value:"right",className:"controlButton",onClick:t.moveWinnie},"\u2192"))},p=function(t){return o.a.createElement("div",{className:"splash ".concat(0===t.state.map.length||t.state.win?"slideDown":null)},o.a.createElement("h1",null,"Winnie Hunt"),o.a.createElement("h2",null,"Wonton Edition"),o.a.createElement("div",{className:"splashText"},o.a.createElement("h4",null,t.state.win?"Congratulations!":null),o.a.createElement("h5",null,t.state.win?"Winnie found Wonton in ".concat(t.state.steps," steps"):null)),o.a.createElement("button",{onClick:t.startGameHandler,className:"startButton"},t.state.win?"Find more Wontons \ud83e\udd5f":"Go find Wonton \ud83e\udd5f"))},f=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(u.a)(this,(t=Object(w.a)(e)).call.apply(t,[this].concat(o)))).state={map:[],wontonLocation:null,winnieLocation:null,radar:null,steps:null,win:!1},n.startGameHandler=function(){for(var t=[],e=0;e<10;e++){for(var a=[],o=0;o<10;o++)a.push({winnie:!1,wonton:!1,tracked:!1});t.push(a)}var i={x:Math.floor(10*Math.random()),y:Math.floor(10*Math.random())},r={x:0,y:0};!function t(){var e={x:Math.floor(10*Math.random()),y:Math.floor(10*Math.random())};if(i.x===e.x&&i.y===e.y)return t();r.x=e.x,r.y=e.y}(),t[i.y][i.x]={winnie:!1,wonton:!0,tracked:!1},t[r.y][r.x]={winnie:!0,wonton:!1,tracked:!1};var l=Math.abs(i.x-r.x)+Math.abs(i.y-r.y);n.setState({map:t,wontonLocation:i,winnieLocation:r,radar:l,steps:0,win:!1})},n.moveWinnieHandler=function(t){if(0!==n.state.map.length){var e=n.state.steps,a=Object(c.a)(n.state.map),o=Object(l.a)({},n.state.winnieLocation),i=Object(l.a)({},n.state.winnieLocation),r=t.target.value,s=Object(l.a)({},n.state.wontonLocation);"up"===r&&(i.y-=1),"down"===r&&(i.y+=1),"left"===r&&(i.x-=1),"right"===r&&(i.x+=1),i.x=Math.max(0,i.x),i.x=Math.min(9,i.x),i.y=Math.max(0,i.y),i.y=Math.min(9,i.y);var m=Math.abs(s.x-i.x)+Math.abs(s.y-i.y);if(console.log(t.target.value),console.log(i),a[o.y][o.x]={winnie:!1,wonton:!1,tracked:!0},a[i.y][i.x]={winnie:!0,wonton:!1,tracked:!1},i.x===o.x&&i.y===o.y)return null;e++;var u=!1;s.x===i.x&&s.y===i.y&&(u=!0),n.setState({winnieLocation:i,map:a,radar:m,steps:e,win:u})}},n}return Object(d.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"wrapper"},o.a.createElement(p,{startGameHandler:this.startGameHandler,state:this.state}),o.a.createElement("div",{className:"headerfooter"},o.a.createElement("button",{onClick:this.startGameHandler,className:"startButton"},"Start a new Game"),o.a.createElement("div",{className:"headerText"},this.state.win?null:"Go Winnie Go!! ".concat(this.state.radar," steps from \ud83e\udd5f!"))),o.a.createElement(h,{win:this.state.win,map:this.state.map,winnieMove:this.moveWinnieHandler}),o.a.createElement(v,{moveWinnie:this.moveWinnieHandler}))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.278d163c.chunk.js.map