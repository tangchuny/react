let React = require('react');
let ReactDOM = require('react-dom');

let TodoApp = require('./components/TodoApp.react');

ReactDOM.render(
	< TodoApp / > , 
	document.getElementById('content')
);