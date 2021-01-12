import {createStore} from 'redux';
import rootReducer from './modules/rootReducer';

const enhacer = __DEV__ ? console.tron.createEnhancer() : null;

const store = createStore(rootReducer, enhacer);

export default store;
