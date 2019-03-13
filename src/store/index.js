import {createStore, applyMiddleware ,compose} from 'redux'
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import reducer from './reducer'

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;
 


const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);

const persistConfig = {
    key: `root`,
    storage,
    // whitelist: [`login`]
}

const persistedReducer = persistReducer(persistConfig, reducer)

// reducer与store建立连接
export const store = createStore(persistedReducer,
    enhancer
);

export const persistor = persistStore(store);
