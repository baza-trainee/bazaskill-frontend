import axios from '@/config/axios';
import { IPost, CreatePost } from '@/types/posts';

export const createPost = async (data: unknown) => {
  const response = await axios.post<CreatePost[]>(
    '/posts',
    data
  );
  return response;
};

export const getPosts = async () => {
  const { data } = await axios.get<IPost[]>('/posts');
  return data;
};

export const deletePosts = async (id: string) => {
  const response = await axios.delete(`/posts/${id}`);
  return response;
};

export const getPostsID = async (id: string) => {
  const { data } = await axios.get<IPost>(`/posts/${id}`);
  return data;
};

export const updatePost = async (
  id: string,
  data: unknown
) => {
  const response = await axios.patch(`/posts/${id}`, data);
  return response;
};
