import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {
	Route,
	Router,
	IndexRoute,
	browserHistory
} from 'react-router';
import store, { history } from './store/store';


//components
import MainPage from 'MainPage/MainPage';
import AddNote from 'AddNote/AddNote';
import StartPage from 'StartPage/StartPage';

//styles
require('style!css!sass!applicationStyles');
console.log(StartPage);

const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={StartPage} />
			<Route path="main" component={MainPage}/>
		</Router>
	</Provider>
);

ReactDOM.render(router, document.getElementById('app'));
