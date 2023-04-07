import { configureStore } from '@reduxjs/toolkit';
import requestReducer from './slices/requestSlice';
import tokenReducer from './slices/tokenSlice';
import sidebarReducer from './slices/sidebarSlice';

import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
};

const requestPersistedReducer = persistReducer(persistConfig, requestReducer);
const tokenPersistedReducer = persistReducer(persistConfig, tokenReducer);
const sidebarPersistedReducer = persistReducer(persistConfig, sidebarReducer);

export const store = configureStore({
    reducer: {
        requestReducer: requestPersistedReducer,
        tokenReducer: tokenPersistedReducer,
        sidebarReducer: sidebarPersistedReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
