'use client';
import { getSpecializations } from '@/api/specialization';
import { constants } from '@/constants';
import { ISpecialization } from '@/types/specialization';
import {
  useMutation,
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';
import React, { useState } from 'react';
import Stack from './Stack';
import {
  Controller,
  DeepMap,
  FieldError,
  FieldValues,
  SubmitHandler,
  useFieldArray,
  useForm,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import schema from './schema';
import TextInput from './TextInput';
import FileInput from './FileInput';
import defaultValues from './defaultValues';
import Graduate from './Graduate';
import Languages from './Languages';
import Cources from './Сources';
import BazaExperience from './BazaExperience';
import SelectField from './SelectField';
import { createCandidate } from '@/api/candidates';
import {
  IBazaExperience,
  ICandidateCources,
  ICandidateGraduate,
  ICandidateLanguages,
  ICandidates,
} from '@/types/candidates';
import { z } from 'zod';

const AddCandidate = () => {
  const [stack, setStack] = useState<
    Array<{ title: string; isExist: boolean }>
  >([]);
  const { mutate, data } = useMutation({
    mutationKey: [constants.candidates.CREATE_CANDIDATE],
    mutationFn: createCandidate,
  });

  const specialization: UseQueryResult<
    ISpecialization[],
    Error
  > = useQuery({
    queryKey: [
      constants.specialization.FETCH_SPECIALIZATIONS,
    ],
    queryFn: getSpecializations,
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FieldValues>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues,
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log({ ...data, stack });
    const formData = new FormData();
    formData.append('name_ua', data.name_ua);
    formData.append('surname_ua', data.surname_ua);
    formData.append('name', data.name);
    formData.append('surname', data.surname);
    formData.append('country', data.country);
    formData.append('city', data.city);
    formData.append('phone', data.phone);
    formData.append('email', data.email);
    formData.append('linkedin', data.linkedin);
    formData.append('discord', data.discord);
    formData.append('telegram', data.telegram);
    data.languages.forEach(
      (
        { language, level }: ICandidateLanguages,
        index: number
      ) => {
        formData.append(
          `candidate_language[${index}][language]`,
          language
        );
        formData.append(
          `candidate_language[${index}][level]`,
          level
        );
      }
    );
    formData.append('work_format', data.work_format);
    formData.append('sallary_form', data.salary_from);
    formData.append('sallary_to', data.salary_to);
    formData.append('about', data.salary_to);
    formData.append('specialization', data.specialization);
    formData.append('cv', data.cv[0]);
    data.graduate.forEach(
      (graduate: ICandidateGraduate, index: number) => {
        // console.log(graduate);
        formData.append(
          'graduate',
          graduate.graduate_sertificate[0]
        );
        formData.append(
          `graduate[${index}][university]`,
          graduate.universiry
        );
        formData.append(
          `graduate[${index}][university_specializaton]`,
          graduate.universiry_specializaton
        );
        formData.append(
          `graduate[${index}][university_grade]`,
          graduate.universiry_grade
        );
        formData.append(
          `graduate[${index}][graduate_start]`,
          graduate.graduate_start
        );
        formData.append(
          `graduate[${index}][graduate_end]`,
          graduate.graduate_end
        );
      }
    );
    data.cources.forEach(
      (
        {
          cources_name,
          cources_specializaton,
          cources_start,
          cources_end,
          cources_sertificate,
        }: ICandidateCources,
        index: number
      ) => {
        formData.append(`cources`, cources_sertificate[0]);

        formData.append(
          `cources[${index}][cources_name]`,
          cources_name
        );
        formData.append(
          `cources[${index}][cources_specializaton]`,
          cources_specializaton
        );
        formData.append(
          `cources[${index}][cources_start]`,
          cources_start
        );
        formData.append(
          `cources[${index}][cources_end]`,
          cources_end
        );
      }
    );

    data.baza_experience.forEach(
      (
        {
          role,
          project_name,
          project_duration,
        }: IBazaExperience,
        index: number
      ) => {
        formData.append(
          `baza_experience[${index}][role]`,
          role
        );
        formData.append(
          `baza_experience[${index}][project_name]`,
          project_name
        );
        formData.append(
          `baza_experience[${index}][project_duration]`,
          project_duration
        );
      }
    );

    formData.append(
      `baza_recomendation`,
      data.baza_recomendation
    );

    formData.append(`status`, 'searching');
    formData.append(`isPublished`, 'true');
    mutate(formData);
    // reset();
  };

  const graduate = useFieldArray({
    name: 'graduate',
    control,
  });

  const cources = useFieldArray({
    name: 'cources',
    control,
  });

  const baza_experience = useFieldArray({
    name: 'baza_experience',
    control,
  });

  const lang = useFieldArray({
    name: 'languages',
    control,
  });

  return (
    <div className="flex flex-col gap-[32px] px-[40px]">
      <h2 className="pb-[20px] pt-[40px] font-tahoma text-[40px] font-[700]">
        Інформація про кандидата
      </h2>
      <div>
        <h3 className="border-b-[1px] border-white pb-[20px] pt-[40px] font-tahoma text-[24px] font-[700]">
          <span>Персональна інформація</span>
        </h3>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mb-[154px] mt-[32px] flex flex-col gap-[32px] font-sans text-[16px]"
        >
          <div className="flex w-full gap-[24px]">
            <Controller
              name="name_ua"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  error={errors.name_ua?.message as string}
                  isRequired={true}
                  placeholder="Ім`я"
                  title="Ім`я"
                />
              )}
            />

            <Controller
              name="surname_ua"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  error={
                    errors.surname_ua?.message as string
                  }
                  isRequired={true}
                  placeholder="Прізвище"
                  title="Прізвище"
                />
              )}
            />

            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  error={errors.country?.message as string}
                  isRequired={true}
                  placeholder="Країна"
                  title="Країна"
                />
              )}
            />
          </div>

          <div className="flex w-full gap-[24px]">
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  error={errors.name?.message as string}
                  isRequired={true}
                  placeholder="Name"
                  title="Name"
                />
              )}
            />

            <Controller
              name="surname"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  error={errors.surname?.message as string}
                  isRequired={true}
                  placeholder="Surname"
                  title="Surname"
                />
              )}
            />

            <Controller
              name="city"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  error={errors.city?.message as string}
                  isRequired={true}
                  placeholder="Місто"
                  title="Місто"
                />
              )}
            />
          </div>

          <div className="flex w-full gap-[24px]">
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  error={errors.phone?.message as string}
                  isRequired={true}
                  placeholder="Телефон"
                  title="Телефон"
                />
              )}
            />

            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  error={errors.email?.message as string}
                  isRequired={true}
                  placeholder="Email"
                  title="Email"
                />
              )}
            />
            <div className="flex w-full max-w-[442px] grow flex-col gap-[5px]"></div>
          </div>

          <div className="flex w-full gap-[24px]">
            <Controller
              name="linkedin"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  error={errors.linkedin?.message as string}
                  isRequired={true}
                  placeholder="Linkedin"
                  title="Linkedin"
                />
              )}
            />

            <Controller
              name="discord"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  error={errors.discord?.message as string}
                  isRequired={true}
                  placeholder="Discord"
                  title="Discord"
                />
              )}
            />

            <Controller
              name="telegram"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  error={errors.telegram?.message as string}
                  isRequired={true}
                  placeholder="Telegram"
                  title="Telegram"
                />
              )}
            />
          </div>
          <Languages
            control={control}
            fieldArray={lang}
            getValues={getValues}
          />
          <div className="flex w-full gap-[24px]">
            <Controller
              name="work_format"
              control={control}
              render={({
                field: { onChange, value },
                formState: { errors },
              }) => (
                <SelectField
                  title="Формат роботи"
                  value={value}
                  values={['Remote', 'Office', 'Hybrid']}
                  onChange={onChange}
                  errors={
                    (
                      errors.work_format as DeepMap<
                        FieldValues,
                        FieldError
                      >
                    )?.message
                  }
                />
              )}
            />

            <div className="flex w-full max-w-[442px] grow flex-col gap-[5px]">
              <label>
                Бажана зарплата &nbsp;
                <span className="text-red-500">*</span>
              </label>
              <div className="box-border flex w-full max-w-full items-center gap-[12px]">
                <span className="text-[24px]">$</span>
                <Controller
                  name="salary_from"
                  control={control}
                  render={({
                    field: { value, onChange },
                    formState: { errors },
                  }) => (
                    <div className="relative flex w-[inherit] flex-col gap-[5px]">
                      <input
                        value={value}
                        onChange={onChange}
                        placeholder="500"
                        className="box-border h-[44px] w-[inherit] grow rounded-[4px] px-[16px] py-[6px] text-black outline-none"
                      />
                      <span className="absolute left-0 top-[calc(100%+5px)] font-sans text-[12px] text-error">
                        {
                          (
                            errors.salary_from as DeepMap<
                              FieldValues,
                              FieldError
                            >
                          )?.message
                        }
                      </span>
                    </div>
                  )}
                />

                <Controller
                  name="salary_to"
                  control={control}
                  render={({
                    field: { value, onChange },
                    formState: { errors },
                  }) => (
                    <div className="relative flex w-[inherit] flex-col gap-[5px]">
                      <input
                        value={value}
                        onChange={onChange}
                        placeholder="700"
                        className="box-border h-[44px] w-[inherit] grow rounded-[4px] px-[16px] py-[6px] text-black outline-none"
                      />
                      <span className="absolute left-0 top-[calc(100%+5px)] font-sans text-[12px] text-error">
                        {
                          (
                            errors.salary_to as DeepMap<
                              FieldValues,
                              FieldError
                            >
                          )?.message
                        }
                      </span>
                    </div>
                  )}
                />
              </div>
            </div>
            <div className="flex w-full max-w-[442px] grow flex-col gap-[5px]"></div>
          </div>

          <div className="flex w-full gap-[24px]">
            <Controller
              name="about"
              control={control}
              render={({
                field: { onChange, value },
                formState: { errors },
              }) => (
                <div className="grow-2 flex w-full max-w-[908px] flex-col gap-[5px]">
                  <label htmlFor="about">
                    Про себе &nbsp;
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={value}
                    onChange={onChange}
                    placeholder="Коментар"
                    className="max-h-[132px] min-h-[132px] min-w-full appearance-none rounded-[4px] px-[16px] py-[12px] text-black outline-none"
                  ></textarea>
                  <span className="font-sans text-[12px] text-error">
                    {
                      (
                        errors.about as DeepMap<
                          FieldValues,
                          FieldError
                        >
                      )?.message
                    }
                  </span>
                </div>
              )}
            />
            <div className="flex w-full max-w-[442px] shrink-[2] grow flex-col gap-[5px]"></div>
          </div>

          <div className="flex w-full gap-[24px] border-b-[1px] border-white pb-[20px] pt-[40px] font-tahoma text-[24px] font-[700]">
            <h3>Спеціальність</h3>
          </div>

          <div className="flex w-full gap-[24px]">
            <Controller
              name="specialization"
              control={control}
              render={({
                field: { onChange, value },
                formState: { errors },
              }) => (
                <div className="flex w-full max-w-[442px] grow flex-col gap-[5px]">
                  <label htmlFor="specialization">
                    Cпеціальність &nbsp;
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="specialization"
                    value={value}
                    onChange={onChange}
                    className="box-border h-[44px] rounded-[4px] px-[16px] py-[6px] text-black outline-none"
                  >
                    <option value="">
                      Оберіть спеціальність
                    </option>
                    {specialization.data?.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.title}
                      </option>
                    ))}
                  </select>
                  <span className="font-sans text-[12px] text-error">
                    {
                      (
                        errors.specialization as DeepMap<
                          FieldValues,
                          FieldError
                        >
                      )?.message
                    }
                  </span>
                </div>
              )}
            />

            <Controller
              name="cv"
              control={control}
              render={({
                field: { onChange, value },
                formState: { errors },
              }) => (
                <FileInput
                  onChange={onChange}
                  value={value}
                  title="Завантажити CV"
                  errors={
                    (
                      errors.cv as DeepMap<
                        FieldValues,
                        FieldError
                      >
                    )?.message
                  }
                />
              )}
            />
            <div className="flex w-full max-w-[442px] grow flex-col gap-[5px]"></div>
          </div>

          <Stack handleStack={setStack} />

          <div className="flex w-full gap-[24px] border-b-[1px] border-white pb-[20px] pt-[40px] font-tahoma text-[24px] font-[700]">
            <h3>Освіта</h3>
          </div>

          <Graduate
            fieldArray={graduate}
            control={control}
          />

          <div className="flex w-full gap-[24px] border-b-[1px] border-white pb-[20px] pt-[40px] font-tahoma text-[24px] font-[700]">
            <h3>Курси</h3>
          </div>

          <Cources fieldArray={cources} control={control} />

          <div className="flex w-full gap-[24px] border-b-[1px] border-white pb-[20px] pt-[40px] font-tahoma text-[24px] font-[700]">
            <h3>Досвід роботи на Базі</h3>
          </div>

          <BazaExperience
            control={control}
            fieldArray={baza_experience}
          />

          <div className="flex w-full gap-[24px]">
            <Controller
              name="baza_recomendation"
              control={control}
              render={({
                field: { value, onChange },
                formState: { errors },
              }) => (
                <div className="grow-2 flex w-full max-w-[908px] flex-col gap-[5px]">
                  <label
                    className="font-[700]"
                    htmlFor="baza_recomendation"
                  >
                    Рекомендації від Baza Skill &nbsp;
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={value}
                    onChange={onChange}
                    placeholder="Рекомендація"
                    className="max-h-[132px] min-h-[132px] min-w-full appearance-none rounded-[4px] px-[16px] py-[12px] text-black outline-none"
                  ></textarea>
                  <span className="font-sans text-[12px] text-error">
                    {
                      (
                        errors.baza_recomendation as DeepMap<
                          FieldValues,
                          FieldError
                        >
                      )?.message
                    }
                  </span>
                </div>
              )}
            />

            <div className="flex w-full max-w-[442px] shrink-[2] grow flex-col gap-[5px]"></div>
          </div>
          <div className="flex justify-start gap-[24px] py-[80px]">
            <button
              className="flex h-[44px] w-[286px] items-center justify-center rounded-[6px] bg-white font-sans font-[600] leading-[22px] text-black transition-all hover:border-[1px] hover:bg-transparent hover:text-white"
              type="submit"
            >
              Опублікувати
            </button>
            <div
              onClick={() => console.log(getValues())}
              className="flex h-[44px] w-[286px] cursor-pointer items-center justify-center rounded-[6px] border-[1px] font-sans font-[600] leading-[22px] text-white transition-all hover:bg-white hover:text-black"
            >
              Зберегти в чернетках
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCandidate;
