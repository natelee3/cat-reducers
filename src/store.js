import { createStore } from 'redux';
import { changeActivity } from './reducers';

//Default state
const defaultState = {
    activity: 'napping'
};

export const store = createStore(changeActivity, defaultState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()   
);
