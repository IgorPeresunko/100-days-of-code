import * as redux from 'redux';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from '../reducers/index'; 
import {startAddNotes} from '../actions/noteAction';

const store = redux.createStore(rootReducer, {}, redux.compose(
    redux.applyMiddleware(thunk)
));

store.dispatch(startAddNotes());

store.subscribe(() => console.log(store.getState()));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;