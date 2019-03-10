import {createStore, applyMiddleware ,compose} from 'redux'
import thunk from 'redux-thunk';
import reducer from './reducer'

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);
// reducer与store建立连接
const store = createStore(reducer,
    enhancer
);
export default store;
