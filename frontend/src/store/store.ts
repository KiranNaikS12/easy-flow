import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import { PERSIST, persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const rootReducers = combineReducers({
    auth: authReducer
})

//persistence configuration
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["auth"],
};

// Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducers);


// Creating the store and the persistor objects to export them
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [PERSIST],
        },
    }),
})


export type RootState = ReturnType<typeof store.getState>

export const persistor = persistStore(store)
