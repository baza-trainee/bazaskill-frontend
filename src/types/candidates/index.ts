export interface ICandidateGraduate {
  universiry: string;
  universiry_specializaton: string;
  universiry_grade: string;
  graduate_start: string;
  graduate_end: string;
  graduate_sertificate: FileList;
}

export interface ICandidateCources {
  cources_name: string;
  cources_specializaton: string;
  cources_start: string;
  cources_end: string;
  cources_sertificate: FileList;
}

export interface IBazaExperience {
  role: string;
  project_name: string;
  project_duration: string;
}

export interface ICandidateLanguages {
  language: string;
  level: string;
}

export interface ICandidates {
  name_ua: string;
  surname_ua: string;
  name: string;
  surname: string;
  country: string;
  city: string;
  phone: string;
  email: string;
  linkedin: string;
  discord: string;
  telegram: string;
  languages: ICandidateLanguages[];
  work_format: string;
  salary_from: string;
  salary_to: string;
  about: string;
  specialization: string;
  cv: FileList;
  graduate: ICandidateGraduate[];
  cources: ICandidateCources[];
  baza_experience: IBazaExperience[];
  baza_recomendation: string;
}
