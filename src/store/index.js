import {createStore, applyMiddleware ,compose} from 'redux'
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

import { CookieStorage } from 'redux-persist-cookie-storage'
import Cookies from 'cookies-js'

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
    storage: new CookieStorage(Cookies, {
        expiration: {
            'default': '36511', // Session cookies used by default
        }
    }),
    whitelist: [`login`]
}










const persistedReducer = persistReducer(persistConfig, reducer)

// reducer与store建立连接
export const store = createStore(persistedReducer,
    enhancer
);

export const persistor = persistStore(store);
