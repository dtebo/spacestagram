import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import imageReducer from './reducers/imageReducer';

const storeRedux = () => createStore(
    imageReducer,
    applyMiddleware(thunk)
);

export default storeRedux;