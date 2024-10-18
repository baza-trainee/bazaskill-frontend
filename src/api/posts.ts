import type { CreatePost, IPost } from '@/types/posts';

import axios from '@/config/axios';

export async function createPost(data: unknown) {
  const response = await axios.post<CreatePost[]>(
    '/posts',
    data,
  );
  return response;
}

export async function getPosts() {
  const { data } = await axios.get<IPost[]>('/posts');
  return data;
}

export async function deletePosts(id: string) {
  const response = await axios.delete(`/posts/${id}`);
  return response;
}

export async function getPostsID(id: string) {
  const { data } = await axios.get<IPost>(`/posts/${id}`);
  return data;
}

export async function updatePost(id: string, data: unknown) {
  const response = await axios.patch(`/posts/${id}`, data);
  return response;
}
