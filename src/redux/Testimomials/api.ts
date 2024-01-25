import axios from "axios";

export const getTestimonials = async () => {
    const result: Promise<any> = new Promise((resolve) => {
        setTimeout(() => resolve({
            data: [{
                id: "фів",
                name: "филип",
                review: "имхо",
                createdAt: "strсччсчing",
            }]
        }), 200)
    })
    // const result = await axios.get<ITestimonial[]>('/testimonials');
    const data  = await result
    return data;
}


export const createTestimonial = async (values: {name:string, review:string}) => {
    const newTestimonial = {
        name: values.name,
        review: values.review,
    };
    const data = await axios.post('/testimonials', newTestimonial);
    return data
}