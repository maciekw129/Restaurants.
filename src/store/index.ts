import { configureStore } from '@reduxjs/toolkit';
import navReducer from './slices/nav';
import authReducer from './slices/auth';


const store = configureStore({
    reducer: {
        nav: navReducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
