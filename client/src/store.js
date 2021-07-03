import {
    createStore, applyMiddleware, compose
} from "redux";
import thunk from "redux-thunk";
import reducer from './reducers'


const initstate = {};
const middleware = [thunk];
const store = createStore(reducer, initstate, compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f));

export default store;