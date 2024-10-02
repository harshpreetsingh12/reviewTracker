import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    // auth: authReducer,
    // reducers will be here
  },
});

// These type exports are specific to TypeScript, so they can be removed in JavaScript:
export const getRootState = () => store.getState();
export const getAppDispatch = () => store.dispatch;
