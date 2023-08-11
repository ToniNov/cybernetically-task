import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';

import stocksReducer from '../features/stocksSlice';

export const store = configureStore({
  reducer: {
    stocks: stocksReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunkMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
