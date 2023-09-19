import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './slices/greetingSlice';

const reducer = {
  greetings: greetingsReducer,
};

const store = configureStore({ reducer });

export default store;