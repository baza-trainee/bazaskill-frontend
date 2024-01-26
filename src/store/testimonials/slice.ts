import { initialState } from './state';
import { ITestimonial } from '@/types/testimonials';
import { fetchTestimonials } from './thunk';
import {
  createSlice,
  isAnyOf,
  PayloadAction,
} from '@reduxjs/toolkit';
import {
  handlePenging,
  handleFullfiled,
  handleRejected,
} from '../helpers';

const testimonialSlice = createSlice({
  name: 'testimonials',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchTestimonials.fulfilled,
        (state, action: PayloadAction<ITestimonial[]>) => {
          state.testimonials =
            action.payload as ITestimonial[];
        }
      )
      .addMatcher(
        isAnyOf(fetchTestimonials.pending),
        handlePenging
      )
      .addMatcher(
        isAnyOf(fetchTestimonials.fulfilled),
        handleFullfiled
      )
      .addMatcher(
        isAnyOf(fetchTestimonials.rejected),
        handleRejected
      );
  },
});

export default testimonialSlice.reducer;
