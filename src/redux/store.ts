import { configureStore } from '@reduxjs/toolkit';
import testimonialSlice from './slices/testimonialSlice';

export const rootStore = () => {
  return configureStore({
    reducer: {
      testimonial: testimonialSlice,
    },
  });
};

export type AppStore = ReturnType<typeof rootStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
