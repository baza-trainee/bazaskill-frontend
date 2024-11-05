export interface IStory {
    id: string;
    name_ua: string;
    name_en: string;
    name_pl: string;
    text_ua: string;
    text_en: string;
    text_pl: string;
    date: string;
    speciality: string;
    image_id: string;
    image_url: string;
    created_at: string;
  }
  
  export interface IStoryData {
    name_ua: string;
    name_en: string;
    name_pl: string;
    text_ua: string;
    text_en: string;
    text_pl: string;
    date: string;
    speciality: string;
    file: File;
  }
  