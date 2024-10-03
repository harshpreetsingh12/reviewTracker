import { configureStore } from '@reduxjs/toolkit';
import { themeReducer } from './actionsReducers/themeReducer/themeReducer';
// import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    themeState: themeReducer,
  },
});

// These type exports are specific to TypeScript, so they can be removed in JavaScript:
export const getRootState = () => store.getState();
export const getAppDispatch = () => store.dispatch;
