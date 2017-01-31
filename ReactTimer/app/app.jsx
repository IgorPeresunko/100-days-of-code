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
let Countdown = require('Countdown');
let Timer = require('Timer');

//styles
require('style!css!sass!applicationStyles');


ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Route path="countdown" component={Countdown}></Route>
			<IndexRoute component={Timer} />
		</Route>
	</Router>,
	document.getElementById('app')
);
