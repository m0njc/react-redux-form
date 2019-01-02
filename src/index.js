
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form'
import theReducer from './reducers';

import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const reducer = combineReducers({
  form: reduxFormReducer,
  result: theReducer
})

const initialState = { form: 0 };
const store = compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension(),
)(createStore)(reducer, initialState);


ReactDOM.render(
  	<Provider store={store}>
  		<App />
	   </Provider>
	,
   document.getElementById('root')
);
registerServiceWorker();
