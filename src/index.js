import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App.jsx";
import {Provider} from "react-redux";
import {createStore, combineReducers} from "redux";
import reducer from "./store/reducer";

const rootReducer = combineReducers({
    data: reducer
});
const store = createStore(rootReducer); 

ReactDOM.render(
<Provider store = {store} >< App /></Provider>
, document.getElementById('App'));


