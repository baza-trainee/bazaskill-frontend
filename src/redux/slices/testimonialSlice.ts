import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ITestimonial } from '@/types';
import { AxiosError } from 'axios';
import axios from '@/config/axios';

type TestimonialState = {
  testimonials: ITestimonial[];
  loading: boolean;
  error: string | null;
};

const initialState: TestimonialState = {
  testimonials: [],
  loading: false,
  error: null,
};

export const fetchTestimonials = createAsyncThunk('testimonials/fetchTestimonials', async () => {
  try {
    const response = await axios.get<ITestimonial[]>('/testimonials');
    const data = response.data;
    return data;
  } catch (error) {
    const err = error as AxiosError;
    return err.message;
  }
});

const reviewsSlice = createSlice({
  name: 'testimonials',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTestimonials.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTestimonials.fulfilled, (state, action) => {
        state.testimonials = action.payload as ITestimonial[];
        state.loading = false;
      });
  },
});

export default reviewsSlice.reducer;
