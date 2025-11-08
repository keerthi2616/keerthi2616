import { configureStore } from '@reduxjs/toolkit';
import feedbackReducer from '../features/feedbackslice';

export const store = configureStore({
  reducer: {
    feedback: feedbackReducer,
  },
});