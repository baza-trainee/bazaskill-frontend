import { getTestimonials, createTestimonial } from './api';
import { TestimonialFormInput } from './../../types/testimonials/index';
import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTestimonials = createAsyncThunk(
  'testimonials/fetchTestimonials',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getTestimonials();
      return data;
    } catch (error) {
      const err = error as AxiosError;
      return rejectWithValue(err.message);
    }
  }
);

export const addNewTestimonial = createAsyncThunk(
  'testimonials/addNewTestimonial',
  async (
    values: TestimonialFormInput,
    { rejectWithValue }
  ) => {
    try {
      const { data } = await createTestimonial(values);
      return data;
    } catch (error) {
      const err = error as AxiosError;
      return rejectWithValue(err.message);
    }
  }
);
