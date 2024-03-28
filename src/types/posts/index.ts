export interface IPost {
  id: string;
  title: string;
  created_at: string;
  image_id: string;
  image_url: string;
  text: string;
  link: string;
  key?: string;
  file?: File;
  isAdmin?: boolean;
}

export interface CreatePost {
  title: string;
  text: string;
  link: string;
  file: File;
}
