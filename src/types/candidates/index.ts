export interface ICandidateGraduate {
  university: string;
  university_specializaton: string;
  university_grade: string;
  graduate_start: string;
  graduate_end: string;
  graduate_sertificate: FileList;
  graduate_sertificate_id: string;
}

export interface ICandidateCources {
  cources_name: string;
  cources_specializaton: string;
  cources_start: string;
  cources_end: string;
  cources_sertificate: FileList;
  cources_sertificate_id: string;
}

export interface IBazaExperience {
  role: string;
  project_name: string;
  project_duration: string;
}

export interface IOutBazaExperience {
  company_name: string;
  company_specialization: string;
  work_start: string;
  work_end: string;
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
  cv_id: string;
  graduate: ICandidateGraduate[];
  cources: ICandidateCources[];
  baza_experience: IBazaExperience[];
  out_baza_experience: IOutBazaExperience[];
  baza_recomendation: string;
  status: string;
  uniqueId: string;
}

export type Candidates = {
  id: number;
  text: string;
};

export type CoursesResponse = {
  id: number;
  cources_name: string;
  cources_sertificate: string;
  cources_sertificate_id: string;
  cources_specializaton: string;
  cources_start: string;
  cources_end: string;
};

export type Graduateresponse = {
  id: number;
  university: string;
  university_specialization: string;
  university_grade: string;
  graduate_start: string;
  graduate_end: string;
  graduate_sertificate: string;
  graduate_sertificate_id: string;
};

export type LanguageResponse = {
  id: number;
  language: string;
  level: string;
};

export type StackResponse = {
  id: number;
  stack: { id: number; title: string };
};

export type BazaExperienceResponse = {
  id: number;
  project_name: string;
  project_duration: string;
  specialization: { id: number; title: string };
};

export type OutBazaExperienceResponse = {
  id: number;
  company_name: string;
  company_specialization: string;
  work_start: string;
  work_end: string;
};

export type CandidatesResponse = {
  id: number;
  name_ua: string;
  surname_ua: string;
  name: string;
  surname: string;
  about: string;
  country: string;
  city: string;
  phone: string;
  email: string;
  linkedin: string;
  discord: string;
  telegram: string;
  work_format: string;
  sallary_form: string;
  sallary_to: string;
  cv: string;
  cv_id: string;
  baza_recomendation: string;
  status: string;
  isPublished: true;
  specialization: { id: number; title: string };
  candidate_language: LanguageResponse[];
  stack: StackResponse[];
  gradaute: Graduateresponse[];
  cources: CoursesResponse[];
  baza_experience: BazaExperienceResponse[];
  uniqueId: string;
};
