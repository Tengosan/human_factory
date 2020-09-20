import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import coinReducer from './moneybox/redux';
import bagReducer from './bag/redux';
import factoryReducer from './factory/redux';

const commonReducer = combineReducers({
     coins: coinReducer,
     items: bagReducer,
     claudron: factoryReducer
});
  
const store = createStore(commonReducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
     
        <App />
     
    </Provider>
  ,
    document.getElementById('root')
  );
  
registerServiceWorker();
