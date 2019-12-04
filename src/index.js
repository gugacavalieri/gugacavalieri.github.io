import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/* leave a nice message to visitors */
console.log("%cI knew you would come in here!", "color: #F06000;  font-size: 4.5em; font-weight: bolder; text-shadow: #000 1px 1px;");
console.log("%cFeel free to check Dev.to posts at: https://dev.to/gugacavalieri", "color: #F06000;  font-size: 1.5em; font-weight: bolder; text-shadow: #000 1px 1px;")

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
