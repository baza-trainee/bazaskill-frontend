const defaultValues = {
  name_ua: '1',
  surname_ua: '1',
  name: '1',
  surname: '1',
  country: '1',
  city: '1',
  phone: '1',
  email: 'user@mail.com',
  linkedin: '1',
  discord: '1',
  telegram: '1',
  cv: null,
  graduate: [
    {
      universiry: '1',
      universiry_specializaton: '1',
      universiry_grade: '1',
      graduate_start: '1',
      graduate_end: '1',
      graduate_sertificate: null,
    },
  ],
  cources: [
    {
      cources_name: '1',
      cources_specializaton: '1',
      cources_start: '1',
      cources_end: '1',
      cources_sertificate: null,
    },
  ],
  baza_experience: [
    {
      role: '',
      project_name: '',
      project_duration: '',
    },
  ],
};

export default defaultValues;
