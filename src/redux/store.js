import { configureStore } from '@reduxjs/toolkit';
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

import requestReducer from './slices/requestSlice';
import tokenReducer from './slices/tokenSlice';
import sidebarReducer from './slices/sidebarSlice';
import missLessonReducer from './slices/missLessonSlice';
import paginationReducer from './slices/paginationSlice';


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
        missLessonReducer,
        paginationReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
