const defaultValues = {
  name_ua: 'Іван',
  surname_ua: 'Іванов',
  name: 'Ivan',
  surname: 'Ivanov',
  country: 'Україна',
  city: 'Харків',
  phone: '88005553535',
  email: 'user@mail.com',
  linkedin: 'https://linkedin.com',
  discord: 'https://discord.com',
  telegram: 'https://telegram.com',
  languages: [
    {
      language: '',
      level: '',
    },
  ],
  work_format: '',
  salary_from: '',
  salary_to: '',
  specialization: '',
  about:
    'Цей текст про мене я його додав щоб тестувальнику було легше та швидше тестувати форму. Якщо ти тестувальник зітреш цей текст або текст у будьякому полі то побачиш що воно обов`язкове і без ньго форма не відправиться',
  cv: null,
  graduate: [
    {
      universiry: 'KNURE',
      universiry_specializaton: 'Program ingenering',
      universiry_grade: 'Bachelor',
      graduate_start: '01.09.2017',
      graduate_end: '21.07.2022',
      graduate_sertificate: null,
    },
  ],
  cources: [
    {
      cources_name: 'Hillel',
      cources_specializaton: 'Frontend',
      cources_start: '21.06.2023',
      cources_end: '21.11.2023',
      cources_sertificate: null,
    },
  ],
  baza_experience: [
    {
      role: '',
      project_name: 'BazaSkill',
      project_duration: '3',
    },
  ],
  baza_recomendation:
    'Цей текст про мене я його додав щоб тестувальнику було легше та швидше тестувати форму. Якщо ти тестувальник зітреш цей текст або текст у будьякому полі то побачиш що воно обов`язкове і без ньго форма не відправиться',
};

export default defaultValues;
