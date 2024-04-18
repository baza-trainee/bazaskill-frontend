/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from '@/config/axios';
import {
  IBazaExperience,
  ICandidateCources,
  ICandidateGraduate,
  ICandidateLanguages,
  IOutBazaExperience,
} from '@/types/candidates';
import { IStack } from '@/types/stack';

export const getCandidateById = async (id: string) => {
  const response = await axios.get(`/candidates/${id}`);
  return response.data;
};

export const getAllCandidates = async () => {
  const response = await axios.get(`/candidates`);
  return response.data;
};

export const createCandidate = async (values: any) => {
  let cvResponse: any;
  let courcesResponse: any;
  let graduateResponse: any;

  if (values.data.cv.length) {
    const cvFormData = new FormData();
    cvFormData.append('file', values.data.cv[0]);
    cvResponse = await axios.post(
      'candidates/upload-cv',
      cvFormData
    );
  }

  const coursesCertificates = values.data.cources.map(
    (cource: ICandidateCources) =>
      cource.cources_sertificate[0]
  );

  if (
    coursesCertificates.some((item: any) => item.length)
  ) {
    const filesToUpload = coursesCertificates.filter(
      (item: any) => item.length > 0
    );

    const courcesFormData = new FormData();
    filesToUpload.forEach((element: File) => {
      courcesFormData.append('cources', element);
    });
    courcesResponse = await axios.post(
      'candidates/upload-cources',
      courcesFormData
    );
  }

  // const courcesFormData = new FormData();
  // coursesCertificates.forEach((element: File) => {
  //   courcesFormData.append('cources', element);
  // });
  // const courcesResponse = await axios.post(
  //   'candidates/upload-cources',
  //   courcesFormData
  // );

  const graduateCertificates = values.data.graduate.map(
    (item: ICandidateGraduate) =>
      item.graduate_sertificate[0]
  );

  if (
    graduateCertificates.some((item: any) => item.length)
  ) {
    const filesToUpload = graduateCertificates.filter(
      (item: any) => item.length > 0
    );
    const graduateFormData = new FormData();
    filesToUpload.forEach((element: File) => {
      graduateFormData.append('graduate', element);
    });
    graduateResponse = await axios.post(
      'candidates/upload-graduate',
      graduateFormData
    );
  }

  // const graduateCertificates = values.data.graduate.map(
  //   (item: ICandidateGraduate) =>
  //     item.graduate_sertificate[0]
  // );
  // const graduateFormData = new FormData();
  // graduateCertificates.forEach((element: File) => {
  //   graduateFormData.append('graduate', element);
  // });
  // const graduateResponse = await axios.post(
  //   'candidates/upload-graduate',
  //   graduateFormData
  // );

  const newCandidate = {
    name_ua: values.data.name_ua,
    surname_ua: values.data.surname_ua,
    name: values.data.name,
    surname: values.data.surname,
    about: values.data.about,
    country: values.data.country,
    city: values.data.city,
    phone: values.data.phone,
    email: values.data.email,
    linkedin: values.data.linkedin,
    discord: values.data.discord,
    telegram: values.data.telegram,
    candidate_language: values.data.languages.map(
      (lang: ICandidateLanguages) => ({
        language: lang.language,
        level: lang.level,
      })
    ),
    work_format: values.data.work_format,
    sallary_form: values.data.salary_from,
    sallary_to: values.data.salary_to,
    specialization: values.data.specialization,
    cv: cvResponse ? cvResponse.data.url : '',
    stack: values.stack.map((item: IStack) => item.id),
    gradaute: values.data.graduate.map(
      (item: ICandidateGraduate, index: number) => ({
        university: item.university,
        university_specialization:
          item.university_specializaton,
        university_grade: item.university_grade,
        graduate_start: item.graduate_start,
        graduate_end: item.graduate_end,
        graduate_sertificate: graduateResponse
          ? graduateResponse.data[index].url
          : '',
      })
    ),
    cources: values.data.cources.map(
      (cource: ICandidateCources, index: number) => ({
        cources_name: cource.cources_name,
        cources_sertificate: courcesResponse
          ? courcesResponse.data[index].url
          : '',
        cources_specializaton: cource.cources_specializaton,
        cources_start: cource.cources_start,
        cources_end: cource.cources_end,
      })
    ),

    baza_experience: values.data.baza_experience.map(
      (item: IBazaExperience) => ({
        specialization: item.role,
        project_name: item.project_name,
        project_duration: item.project_duration,
      })
    ),
    out_baza_experience:
      values.data.out_baza_experience.map(
        (item: IOutBazaExperience) => ({
          company_name: item.company_name,
          company_specialization:
            item.company_specialization,
          work_start: item.work_start,
          work_end: item.work_end,
        })
      ),
    baza_recomendation: values.data.baza_recomendation,
    status: 'working',
    isPublished: true,
  };

  const { data } = await axios.post(
    '/candidates',
    newCandidate
  );
  return data;
};

export const updateCandidate = async (
  id: string,
  values: any
) => {
  let cvResponse: any;
  let courcesResponse: any;
  let graduateResponse: any;

  if (values.data.cv[0].size > 0) {
    const cvFormData = new FormData();
    cvFormData.append('file', values.data.cv[0]);
    cvResponse = await axios.post(
      'candidates/upload-cv',
      cvFormData
    );
  }

  const coursesCertificates = values.data.cources.map(
    (cource: ICandidateCources) =>
      cource.cources_sertificate[0]
  );

  if (
    coursesCertificates.some((item: File) => item.size > 0)
  ) {
    const filesToUpload = coursesCertificates.filter(
      (item: File) => item.size > 0
    );

    const courcesFormData = new FormData();
    filesToUpload.forEach((element: File) => {
      courcesFormData.append('cources', element);
    });
    courcesResponse = await axios.post(
      'candidates/upload-cources',
      courcesFormData
    );
  }

  const graduateCertificates = values.data.graduate.map(
    (item: ICandidateGraduate) =>
      item.graduate_sertificate[0]
  );

  if (
    graduateCertificates.some((item: File) => item.size > 0)
  ) {
    const filesToUpload = graduateCertificates.filter(
      (item: File) => item.size > 0
    );
    const graduateFormData = new FormData();
    filesToUpload.forEach((element: File) => {
      graduateFormData.append('graduate', element);
    });
    graduateResponse = await axios.post(
      'candidates/upload-graduate',
      graduateFormData
    );
  }

  const newCandidate = {
    name_ua: values.data.name_ua,
    surname_ua: values.data.surname_ua,
    name: values.data.name,
    about: values.data.about,
    surname: values.data.surname,
    country: values.data.country,
    city: values.data.city,
    phone: values.data.phone,
    email: values.data.email,
    linkedin: values.data.linkedin,
    discord: values.data.discord,
    telegram: values.data.telegram,
    candidate_language: values.data.languages.map(
      (lang: ICandidateLanguages) => ({
        language: lang.language,
        level: lang.level,
      })
    ),
    work_format: values.data.work_format,
    sallary_form: values.data.salary_from,
    sallary_to: values.data.salary_to,
    specialization: values.data.specialization,
    cv: cvResponse
      ? cvResponse.data.url
      : values.data.cv[0].name,
    stack: values.stack.map((item: IStack) => item.id),
    gradaute: values.data.graduate.map(
      (item: ICandidateGraduate, index: number) => ({
        university: item.university,
        university_specialization:
          item.university_specializaton,
        university_grade: item.university_grade,
        graduate_start: item.graduate_start,
        graduate_end: item.graduate_end,
        graduate_sertificate:
          graduateResponse && graduateResponse.data[index]
            ? graduateResponse.data[index].url
            : item.graduate_sertificate[0].name,
      })
    ),
    cources: values.data.cources.map(
      (cource: ICandidateCources, index: number) => ({
        cources_name: cource.cources_name,
        cources_sertificate:
          courcesResponse && courcesResponse.data[index]
            ? courcesResponse.data[index].url
            : cource.cources_sertificate[0].name,
        cources_specializaton: cource.cources_specializaton,
        cources_start: cource.cources_start,
        cources_end: cource.cources_end,
      })
    ),

    baza_experience: values.data.baza_experience.map(
      (item: IBazaExperience) => ({
        specialization: item.role,
        project_name: item.project_name,
        project_duration: item.project_duration,
      })
    ),
    out_baza_experience:
      values.data.out_baza_experience.map(
        (item: IOutBazaExperience) => ({
          company_name: item.company_name,
          company_specialization:
            item.company_specialization,
          work_start: item.work_start,
          work_end: item.work_end,
        })
      ),
    baza_recomendation: values.data.baza_recomendation,
    status: 'working',
    isPublished: true,
  };

  const { data } = await axios.post(
    `/candidates/${id}`,
    newCandidate
  );
  return data;
};
