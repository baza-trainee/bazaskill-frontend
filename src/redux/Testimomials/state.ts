import { ITestimonial } from '@/types/testimonials';
type TestimonialState = {
    testimonials: ITestimonial[];
    loading: boolean;
    error: string | null;
};

export const initialState: TestimonialState = {
    testimonials: [{
        id: "string",
        name: "stringsadasd222452424",
        review: "string",
        createdAt: "string",
    }],
    loading: false,
    error: null,
};