/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from '@/config/axios';
import {
  IBazaExperience,
  ICandidateCources,
  ICandidateGraduate,
  ICandidateLanguages,
} from '@/types/candidates';
import { IStack } from '@/types/stack';
import { generateRandomId } from '@/helpers/generateId';

export const getCandidateById = async (id: string) => {
  const response = await axios.get(`/candidates/${id}`);
  return response.data;
};

export const getAllCandidates = async () => {
  const response = await axios.get(`/candidates`);
  return response.data;
};

export const deleteCandidate = async (id: string) => {
  const response = await axios.delete(`/candidates/${id}`);
  return response;
};

export const createCandidate = async (values: any) => {
  let cvResponse: any;
  let courcesResponse: any;
  let graduateResponse: any;

  const transformCvUrl = (url: string) => {
    const urlArr = url.split('.');
    if (urlArr[urlArr.length - 1] === 'docx') {
      const replaced = url.replace('raw', 'image');
      return `${replaced}.pdf`;
    }
    return url;
  };

  if (values.data.cv[0]) {
    const cvFormData = new FormData();
    cvFormData.append('file', values.data.cv[0]);
    cvResponse = await axios.post(
      'candidates/upload-cv',
      cvFormData
    );
  }

  const coursesCertificates = values.data.cources
    .map(
      (cource: ICandidateCources) =>
        cource.cources_sertificate
    )
    .filter((item: File | undefined) => item !== undefined);

  if (
    coursesCertificates.some((item: any) => item !== '')
  ) {
    const filesToUpload = coursesCertificates.filter(
      (item: any) => item !== ''
    );

    const courcesFormData = new FormData();
    filesToUpload.forEach((element: FileList) => {
      courcesFormData.append('cources', element[0]);
    });
    courcesResponse = await axios.post(
      'candidates/upload-cources',
      courcesFormData
    );
  }

  const graduateCertificates = values.data.graduate
    .map(
      (item: ICandidateGraduate) =>
        item.graduate_sertificate
    )
    .filter((item: File | undefined) => item !== undefined);

  if (
    graduateCertificates.some((item: any) => item !== '')
  ) {
    const filesToUpload = graduateCertificates.filter(
      (item: any) => item !== ''
    );

    const graduateFormData = new FormData();
    filesToUpload.forEach((element: FileList) => {
      graduateFormData.append('graduate', element[0]);
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
    cv: cvResponse
      ? transformCvUrl(cvResponse.data.secure_url)
      : '',
    cv_id: cvResponse ? cvResponse.data.public_id : '',
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
            ? graduateResponse.data[index].secure_url
            : '',
        graduate_sertificate_id:
          graduateResponse && graduateResponse.data[index]
            ? graduateResponse.data[index].public_id
            : '',
      })
    ),
    cources: values.data.cources.map(
      (cource: ICandidateCources, index: number) => ({
        cources_name: cource.cources_name,
        cources_specializaton: cource.cources_specializaton,
        cources_start: cource.cources_start,
        cources_end: cource.cources_end,
        cources_sertificate:
          courcesResponse && courcesResponse.data[index]
            ? courcesResponse.data[index].secure_url
            : '',
        cources_sertificate_id:
          courcesResponse && courcesResponse.data[index]
            ? courcesResponse.data[index].public_id
            : '',
      })
    ),

    baza_experience: values.data.baza_experience.map(
      (item: IBazaExperience) => ({
        specialization: item.role,
        project_name: item.project_name,
        project_duration: item.project_duration,
      })
    ),
    baza_recomendation: values.data.baza_recomendation,
    status: values.data.status,
    uniqueId: generateRandomId(values.data.specialization),
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

  if (values.currentValues.cv[0].size > 0) {
    const cvFormData = new FormData();
    cvFormData.append('file', values.currentValues.cv[0]);
    cvResponse = await axios.post(
      'candidates/upload-cv',
      cvFormData
    );
  }

  const transformCvUrl = (url: string) => {
    const urlArr = url.split('.');
    if (urlArr[urlArr.length - 1] === 'docx') {
      const replaced = url.replace('raw', 'image');
      return `${replaced}.pdf`;
    }
    return url;
  };

  const coursesCertificates = values.currentValues.cources
    .map(
      (cource: ICandidateCources) =>
        cource.cources_sertificate[0]
    )
    .filter((item: File | undefined) => item !== undefined);

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

  const graduateCertificates = values.currentValues.graduate
    .map(
      (item: ICandidateGraduate) =>
        item.graduate_sertificate[0]
    )
    .filter((item: File | undefined) => item !== undefined);

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

  console.log(courcesResponse);

  const newCandidate = {
    name_ua: values.currentValues.name_ua,
    surname_ua: values.currentValues.surname_ua,
    name: values.currentValues.name,
    about: values.currentValues.about,
    surname: values.currentValues.surname,
    country: values.currentValues.country,
    city: values.currentValues.city,
    phone: values.currentValues.phone,
    email: values.currentValues.email,
    linkedin: values.currentValues.linkedin,
    discord: values.currentValues.discord,
    telegram: values.currentValues.telegram,
    candidate_language: values.currentValues.languages.map(
      (lang: ICandidateLanguages) => ({
        language: lang.language,
        level: lang.level,
      })
    ),
    work_format: values.currentValues.work_format,
    sallary_form: values.currentValues.salary_from,
    sallary_to: values.currentValues.salary_to,
    specialization: values.currentValues.specialization,
    cv: cvResponse
      ? transformCvUrl(cvResponse.data.secure_url)
      : values.currentValues.cv[0].name,
    cv_id: cvResponse
      ? cvResponse.data.public_id
      : values.currentValues.cv_id,
    stack: values.stack.map((item: IStack) => item.id),
    gradaute: values.currentValues.graduate.map(
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
            : item.graduate_sertificate[0].size > 0
              ? graduateResponse.data[0].secure_url
              : item.graduate_sertificate.length
                ? item.graduate_sertificate[0].name
                : '',
        graduate_sertificate_id:
          graduateResponse && graduateResponse.data[index]
            ? graduateResponse.data[index].public_id
            : item.graduate_sertificate[0].size > 0
              ? graduateResponse.data[0].public_id
              : item.graduate_sertificate.length &&
                  item.graduate_sertificate_id
                ? item.graduate_sertificate_id
                : '',
      })
    ),
    cources: values.currentValues.cources.map(
      (cource: ICandidateCources, index: number) => ({
        cources_name: cource.cources_name,
        cources_specializaton: cource.cources_specializaton,
        cources_start: cource.cources_start,
        cources_end: cource.cources_end,
        cources_sertificate:
          courcesResponse && courcesResponse.data[index]
            ? courcesResponse.data[index].url
            : cource.cources_sertificate[0].size > 0
              ? courcesResponse.data[0].secure_url
              : cource.cources_sertificate.length
                ? cource.cources_sertificate[0].name
                : '',
        cources_sertificate_id:
          courcesResponse && courcesResponse.data[index]
            ? courcesResponse.data[index].public_id
            : cource.cources_sertificate[0].size > 0
              ? courcesResponse.data[0].public_id
              : cource.cources_sertificate.length &&
                  cource.cources_sertificate_id
                ? cource.cources_sertificate_id
                : '',
      })
    ),

    baza_experience:
      values.currentValues.baza_experience.map(
        (item: IBazaExperience) => ({
          specialization: item.role,
          project_name: item.project_name,
          project_duration: item.project_duration,
        })
      ),
    baza_recomendation:
      values.currentValues.baza_recomendation,
    status: values.currentValues.status,
    uniqueId: values.currentValues.uniqueId,
    isPublished: true,
  };

  const { data } = await axios.post(
    `/candidates/${id}`,
    newCandidate
  );
  return data;
};
