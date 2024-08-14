'use client';

import * as z from 'zod';
import React, { useState } from 'react';
import {
  Controller,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { constants } from '@/constants';
import { stack } from './data';
import { defaultValues } from './defaultValues';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerScheme } from './validationScheme';
import { useModal } from '@/stores/useModal';
import { useLocale } from 'next-intl';
import { createApplication } from '@/api/hr_application';
import { localizeCountry } from '@/helpers/localizeCountry';
import {
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';

import PhoneInput from '@/components/main/ui/form_inputs/PhoneInput';
import SelectInput from '@/components/main/ui/form_inputs/SelectInput';
import TextInput from '@/components/main/ui/form_inputs/TextInput';
import TextArea from '@/components/main/ui/form_inputs/TextArea';
import CustomCheckbox from '@/components/main/ui/form_inputs/CustomCheckbox';
import SuccessModal from '../SuccesModal';

const RegisterHrForm = () => {
  const t = useTranslations();
  const locale = useLocale();
  const { closeModal } = useModal();
  const queryClient = useQueryClient();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<z.infer<typeof registerScheme>>({
    resolver: zodResolver(registerScheme),
    mode: 'onChange',
    defaultValues: defaultValues,
  });

  const createApplicationMutation = useMutation({
    mutationFn: createApplication,
    onSuccess: () => {
      setIsSubmitted(true);
      queryClient.invalidateQueries({
        queryKey: [constants.hr_applications.FETCH_HRS],
      });
    },
  });

  const onSubmit: SubmitHandler<
    z.infer<typeof registerScheme>
  > = async (values: z.infer<typeof registerScheme>) => {
    try {
      setIsProcessing(true);
      createApplicationMutation.mutate(values);
      setIsProcessing(false);
      if (window.gtag) {
        window.gtag('event', 'conversion', {
          send_to: 'AW-16605851615/SY9xCMq50roZEN_fpO49',
          value: 1.0,
          currency: 'UAH',
        });
      } else {
        console.error(
          'Google gtag function is not defined'
        );
      }
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
    closeModal();
  };

  return (
    <>
      {!isSubmitted ? (
        <div className="mb-[64px] flex w-full flex-col items-center justify-center">
          <h1 className="mb-[26px] mt-[40px] text-base font-semibold sm:mt-[68px] sm:text-xl md:mt-[40px] md:text-2xl md:font-bold">
            {t('Main.forms.to_become_hr')}
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
            className="mb-[32px] flex flex-col"
          >
            <div className="flex flex-col items-center md:flex-row md:items-stretch md:justify-center">
              <Controller
                name="first_name"
                control={control}
                render={({ field }) => (
                  <TextInput
                    title={t('Main.forms.first_name')}
                    {...field}
                    errorText={t(
                      errors.first_name?.message
                    )}
                    placeholder={t('Main.forms.first_name')}
                    isRequired={true}
                  />
                )}
              />
              <Controller
                name="last_name"
                control={control}
                render={({ field }) => (
                  <TextInput
                    title={t('Main.forms.last_name')}
                    {...field}
                    errorText={t(errors.last_name?.message)}
                    placeholder={t('Main.forms.last_name')}
                    isRequired={true}
                  />
                )}
              />
            </div>
            <div className="flex flex-col items-center md:flex-row md:items-stretch md:justify-center">
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <PhoneInput
                    title={t('Main.forms.phone')}
                    {...field}
                    errorText={t(errors.phone?.message)}
                    placeholder={t('Main.forms.phone')}
                    isRequired={true}
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextInput
                    title="Email"
                    {...field}
                    errorText={t(errors.email?.message)}
                    placeholder="Email"
                    isRequired={true}
                  />
                )}
              />
            </div>
            <div className="flex flex-col items-center md:flex-row md:items-stretch md:justify-center">
              <Controller
                name="company"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextInput
                    title={t('Main.forms.company')}
                    {...field}
                    placeholder={t('Main.forms.company')}
                    isRequired={false}
                    errorText={t(errors.company?.message)}
                  />
                )}
              />
              <Controller
                name="country"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <SelectInput
                    title={t('Main.forms.country')}
                    {...field}
                    errorText={errors.country?.message}
                    options={localizeCountry(locale)}
                    placeholder={t('Main.forms.country')}
                  />
                )}
              />
            </div>
            <div className="flex flex-col items-center md:flex-row md:items-stretch md:justify-center">
              <div>
                <Controller
                  name="specialization"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <SelectInput
                      title={t('Main.forms.search')}
                      {...field}
                      errorText={t(
                        errors.specialization?.message
                      )}
                      options={stack}
                      placeholder={t(
                        'Main.forms.speciality'
                      )}
                      isRequired={true}
                    />
                  )}
                />
                <div className="mt-[32px] flex-col">
                  <Controller
                    name="terms"
                    control={control}
                    render={({ field }) => (
                      <CustomCheckbox
                        {...field}
                        title={t(
                          'Main.forms.recruitment_contract'
                        )}
                        isRequired={true}
                        errorText={t(errors.terms?.message)}
                      />
                    )}
                  />
                  <Controller
                    name="terms_2"
                    control={control}
                    render={({ field }) => (
                      <CustomCheckbox
                        {...field}
                        title={t('Main.forms.agreement')}
                        isRequired={true}
                        errorText={t(
                          errors.terms_2?.message
                        )}
                      />
                    )}
                  />
                </div>
              </div>
              <Controller
                name="message"
                control={control}
                render={({ field }) => (
                  <TextArea
                    title={t('Main.forms.comment')}
                    {...field}
                    errorText={t(errors.message?.message)}
                    placeholder={t('Main.forms.comment')}
                    isRequired={true}
                  />
                )}
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="mt-[2rem] w-[231px] rounded-md border border-graphite px-8 py-2 hover:border-transparent hover:bg-green disabled:cursor-not-allowed disabled:border-graphite disabled:bg-inputBgGray disabled:hover:border-graphite"
                disabled={
                  errors && !!Object.keys(errors).length
                }
              >
                {isProcessing
                  ? t('Main.forms.processing')
                  : t('Main.forms.send')}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <SuccessModal onClose={handleClose} />
      )}
    </>
  );
};

export default RegisterHrForm;
