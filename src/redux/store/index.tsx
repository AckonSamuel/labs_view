import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from "../reducers";

const persistConfig = {
    blacklist: ['form'],
    key: 'reactreduxform',
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer );

const MyMiddlewares = [logger, thunk];

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(MyMiddlewares)
},);

const persistor = persistStore(store);

export { store, persistor };
