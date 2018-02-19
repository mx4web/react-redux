import {applyMiddleware, combineReducers, createStore} from "redux";
import logger from "redux-logger"; //get rid of logger for production
import thunk from "redux-thunk"; // using custom middleware thunk for async actions
import promise from "redux-promise-middleware"; //using promise middleware for async actions

import math from "./reducers/mathReducer.js";
import user from "./reducers/userReducer.js";


//es6 will automatically mapping it to key: value pair with the same property name and value. It equals to
//const store = createStore(combineReducers({math: math, user: user}));
export default createStore(
    combineReducers({math, user}),
    {},
    applyMiddleware(logger, thunk, promise())
);