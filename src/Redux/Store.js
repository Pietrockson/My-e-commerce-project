import { legacy_createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import rootReducer from "./Root-reducer";


const middwares = [logger];
const store = legacy_createStore(rootReducer, applyMiddleware(...middwares))

export default store;