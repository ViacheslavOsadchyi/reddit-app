import {createStore,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import rootReducer from './reducers';
// import {selectSubreddit,fetchPostsIfNeeded} from './actions';

const loggerMiddleware = createLogger();

const store = createStore(rootReducer,applyMiddleware(thunkMiddleware,loggerMiddleware));

/*export function testStore (){
	store.dispatch(selectSubreddit('reactjs'));
	store.dispatch(fetchPostsIfNeeded('reactjs'));
}*/

export default store;