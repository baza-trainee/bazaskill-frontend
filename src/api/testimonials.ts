import {
  ITestimonial,
  TestimonialFormInput,
} from '@/types/testimonials';
import axios from '@/config/axios';
// import { NextResponse } from 'next/server';

export const getTestimonials = async () => {
  const { data } =
    await axios.get<ITestimonial[]>('/testimonials');
  return data;
};

export const createTestimonial = async (
  values: TestimonialFormInput
) => {
  const newTestimonial = {
    name: values.name,
    review: values.review,
  };
  const data = await axios.post(
    '/testimonials',
    newTestimonial
  );
  return data;
};

//as option

// export async function POST(values: TestimonialFormInput) {
//   try {
//     const newTestimonial = {
//       name: values.name,
//       review: values.review,
//     };
//     const data = await axios.post(
//       '/testimonials',
//       newTestimonial
//     );
//     return NextResponse.json(data, { status: 200 });
//   } catch (error) {
//     return NextResponse.json(
//       { message: 'Cannot fetch' },
//       { status: 500 }
//     );
//   }
// }
