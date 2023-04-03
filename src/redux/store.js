import { configureStore } from '@reduxjs/toolkit';
import requestReducer from './slices/requestSlice';
import tokenReducer from './slices/tokenSlice';

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

export const store = configureStore({
    reducer: {
        tokenReducer: tokenPersistedReducer,
        requestReducer: requestPersistedReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
