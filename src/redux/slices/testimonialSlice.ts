import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import axios from '@/config/axios';
import { AxiosError } from 'axios';
import {
  ITestimonial,
  TestimonialFormInput,
} from '@/types/testimonials';

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

export const fetchTestimonials = createAsyncThunk(
  'testimonials/fetchTestimonials',
  async () => {
    try {
      const response =
        await axios.get<ITestimonial[]>('/testimonials');
      const data = response.data;
      return data;
    } catch (error) {
      const err = error as AxiosError;
      return err.message;
    }
  }
);

export const addNewTestimonial = createAsyncThunk(
  'testimonials/addNewTestimonial',
  async (values: TestimonialFormInput) => {
    try {
      const newTestimonial = {
        name: values.name,
        review: values.review,
      };
      await axios.post('/testimonials', newTestimonial);
    } catch (error) {
      const err = error as AxiosError;
      return err.message;
    }
  }
);

const testimonialSlice = createSlice({
  name: 'testimonials',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTestimonials.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchTestimonials.fulfilled,
        (state, action) => {
          state.testimonials =
            action.payload as ITestimonial[];
          state.loading = false;
        }
      );
  },
});

export default testimonialSlice.reducer;
