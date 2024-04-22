/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getSpecializations } from '@/api/specialization';
import { constants } from '@/constants';
import { ISpecialization } from '@/types/specialization';
import {
  useMutation,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from '@tanstack/react-query';
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
import {
  updateCandidate,
  getCandidateById,
} from '@/api/candidates';
import OutBazaExperience from './OutBazaExperience';
import {
  CandidatesResponse,
  ICandidateLanguages,
  IOutBazaExperience,
} from '@/types/candidates';

const EditCandidate = ({ id }: { id: string }) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const [isProcessing, setIsProcessing] = useState(false);
  const [stackError, setStackError] = useState('');

  const [stack, setStack] = useState<
    Array<{ id: string; title: string; isExist: boolean }>
  >([]);

  const { mutate } = useMutation({
    mutationKey: [constants.candidates.UPDATE_CANDIDATE],
    mutationFn: (params: any) =>
      updateCandidate(params.id, params.data),
    onSuccess: () => {
      setIsProcessing(false);
      queryClient.invalidateQueries({
        queryKey: [
          constants.candidates.FETCH_ALL_CANDIDATES,
        ],
      });
      router.push('/admin/candidates');
    },
    onError: (error) => {
      alert(error.message);
    },
  });

  const candidate: UseQueryResult<
    CandidatesResponse,
    Error
  > = useQuery({
    queryKey: [constants.candidates.FETCH_CANDIDATE_BY_ID],
    queryFn: () => getCandidateById(id),
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

  useEffect(() => {
    if (stack.length) {
      setStackError('');
    }
  }, [stack]);

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
    setValue,
    watch,
  } = useForm<FieldValues>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues,
    mode: 'onChange',
  });

  useEffect(() => {
    if (candidate.data) {
      const value: any = candidate.data;
      reset({
        name_ua: value.name_ua,
        surname_ua: value.surname_ua,
        name: value.name,
        surname: value.surname,
        country: value.country,
        city: value.city,
        phone: value.phone,
        email: value.email,
        linkedin: value.linkedin,
        discord: value.discord,
        telegram: value.telegram,
        languages: value.candidate_language.map(
          (lang: ICandidateLanguages) => ({
            language: lang.language,
            level: lang.level,
          })
        ),
        work_format: value.work_format,
        salary_from: value.sallary_form,
        salary_to: value.sallary_to,
        specialization: value.specialization.id.toString(),
        about: value.about,
        cv_id: value.cv_id,
        graduate: value.gradaute.map((item: any) => ({
          university: item.university,
          university_specializaton:
            item.university_specialization,
          university_grade: item.university_grade,
          graduate_start: item.graduate_start,
          graduate_end: item.graduate_end,
          graduate_sertificate_id:
            item.graduate_sertificate_id,
        })),
        cources: value.cources.map((cource: any) => ({
          cources_name: cource.cources_name,
          cources_specializaton:
            cource.cources_specializaton,
          cources_start: cource.cources_start,
          cources_end: cource.cources_end,
          cources_sertificate_id:
            cource.cources_sertificate_id,
        })),
        baza_experience: value.baza_experience.map(
          (item: any) => ({
            role: item.specialization.id.toString(),
            project_name: item.project_name,
            project_duration: item.project_duration,
          })
        ),
        out_baza_experience: value.out_baza_experience.map(
          (item: IOutBazaExperience) => ({
            company_name: item.company_name,
            company_specialization:
              item.company_specialization,
            work_start: item.work_start,
            work_end: item.work_end,
          })
        ),
        baza_recomendation: value.baza_recomendation,
        status: value.status,
      });
      candidate.data.gradaute.map(
        (item: any, index: number) => {
          setValue(
            `graduate.${index}.graduate_sertificate`,
            [
              new File([], item.graduate_sertificate, {
                type: 'for-url',
              }),
            ]
          );
        }
      );
      candidate.data.cources.map(
        (item: any, index: number) => {
          setValue(`cources.${index}.cources_sertificate`, [
            new File([], item.cources_sertificate, {
              type: 'for-url',
            }),
          ]);
        }
      );
      setValue('cv', [
        new File([], value.cv, { type: 'for-url' }),
      ]);
      setStack(
        value.stack.map((item: any) => ({
          ...item.stack,
          isExist: true,
        }))
      );
    }
  }, [candidate.data]);

  const currentValues = watch();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    if (!stack.length) {
      setStackError('Додайте декілька технологій зі стеку');
      return;
    }
    setIsProcessing(true);
    mutate({ id, data: { currentValues, stack } });
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

  const out_baza_experience = useFieldArray({
    name: 'out_baza_experience',
    control,
  });

  const lang = useFieldArray({
    name: 'languages',
    control,
  });

  return (
    <div className="flex flex-col gap-[32px] px-[40px]">
      <h2 className="pb-[20px] pt-[40px] font-tahoma text-[40px] font-[700]">
        Редагування кандидата
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
            fieldsLength={
              candidate?.data?.candidate_language
                .length as number
            }
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
                  isRequired={true}
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

          <Stack
            handleStack={setStack}
            outerStack={stack}
            error={stackError}
          />

          <div className="flex w-full gap-[24px] border-b-[1px] border-white pb-[20px] pt-[40px] font-tahoma text-[24px] font-[700]">
            <h3>Освіта</h3>
          </div>

          <Graduate
            fieldArray={graduate}
            control={control}
            fieldsLength={
              candidate?.data?.gradaute.length as number
            }
          />

          <div className="flex w-full gap-[24px] border-b-[1px] border-white pb-[20px] pt-[40px] font-tahoma text-[24px] font-[700]">
            <h3>Курси</h3>
          </div>

          <Cources
            fieldArray={cources}
            control={control}
            fieldsLength={
              candidate?.data?.cources.length as number
            }
          />

          <div className="flex w-full gap-[24px] border-b-[1px] border-white pb-[20px] pt-[40px] font-tahoma text-[24px] font-[700]">
            <h3>Досвід роботи на Базі</h3>
          </div>

          <BazaExperience
            control={control}
            fieldArray={baza_experience}
            fieldsLength={
              candidate?.data?.baza_experience
                ?.length as number
            }
          />

          <div className="flex w-full gap-[24px] border-b-[1px] border-white pb-[20px] pt-[40px] font-tahoma text-[24px] font-[700]">
            <h3>Досвід роботи поза Базою</h3>
          </div>

          <OutBazaExperience
            control={control}
            fieldArray={out_baza_experience}
            fieldsLength={
              candidate?.data?.out_baza_experience
                ?.length as number
            }
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

          <div className="flex w-full gap-[24px]">
            <Controller
              name="status"
              control={control}
              render={({
                field: { onChange, value },
                formState: { errors },
              }) => (
                <SelectField
                  title="Статус кандидата"
                  value={value}
                  values={[
                    'Working',
                    'Searching',
                    'Inactive',
                  ]}
                  onChange={onChange}
                  errors={
                    (
                      errors.status as DeepMap<
                        FieldValues,
                        FieldError
                      >
                    )?.message
                  }
                />
              )}
            />
            <div className="flex w-full max-w-[442px] shrink-[2] grow flex-col gap-[5px]"></div>
          </div>

          <div className="flex justify-start gap-[24px] py-[80px]">
            <button
              className="flex h-[44px] w-[286px] items-center justify-center rounded-[6px] bg-white font-sans font-[600] leading-[22px] text-black transition-all hover:border-[1px] hover:bg-transparent hover:text-white"
              type="submit"
            >
              {isProcessing
                ? 'Обробка запиту...'
                : 'Зберегти зміни'}
            </button>
            <button
              onClick={() =>
                router.push('/admin/candidates')
              }
              className="flex h-[44px] w-[286px] cursor-pointer items-center justify-center rounded-[6px] border-[1px] font-sans font-[600] leading-[22px] text-white transition-all hover:bg-white hover:text-black"
            >
              Скасувати
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCandidate;
