'use strict';

let React = require('react');
let ReactDOM = require('react-dom');
let {
	Route,
	Router,
	IndexRoute,
	hashHistory
} = require('react-router');

//components
let Main = require('Main');

//styles
require('style!css!sass!applicationStyles');


ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
		</Route>
	</Router>,
	document.getElementById('app')
);
