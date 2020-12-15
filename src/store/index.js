import {applyMiddleware,  createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from './sagas';
import {rootReducer} from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';


let initialState = {list:[], loader:true, modal:false,selected:""};

const sagaMiddleware = createSagaMiddleware();

const middleware = [
    sagaMiddleware
];

export const store = createStore(rootReducer, initialState,composeWithDevTools( applyMiddleware(
    ...middleware
)));

sagaMiddleware.run(rootSaga);