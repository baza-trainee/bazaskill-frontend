'use client';

import React, { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useLocale, useTranslations } from 'next-intl';
import type { SubmitHandler } from 'react-hook-form';
import { Controller, useForm } from 'react-hook-form';
import type * as z from 'zod';

import { createApplication } from '@/utils/api/hr_application';
import CustomCheckbox from '@/components/shared/ui/form_inputs/CustomCheckbox';
import PhoneInput from '@/components/shared/ui/form_inputs/PhoneInput';
import SelectInput from '@/components/shared/ui/form_inputs/SelectInput';
import TextArea from '@/components/shared/ui/form_inputs/TextArea';
import TextInput from '@/components/shared/ui/form_inputs/TextInput';
import { constants } from '@/constants';
import { localizeCountry } from '@/helpers/localizeCountry';
import { useModal } from '@/stores/useModal';

import SuccessModal from '../SuccesModal';
import { stack } from './data';
import { defaultValues } from './defaultValues';
import { registerScheme } from './validationScheme';

function RegisterHrForm() {
  const t = useTranslations();
  const locale = useLocale();
  const { closeModal } = useModal();
  const queryMain = useQueryClient();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<z.infer<typeof registerScheme>>({
    resolver: zodResolver(registerScheme),
    mode: 'onChange',
    defaultValues
  });

  const createApplicationMutation = useMutation({
    mutationFn: createApplication,
    onSuccess: () => {
      setIsSubmitted(true);
      queryMain.invalidateQueries({
        queryKey: [constants.hr_applications.FETCH_HRS]
      });
    }
  });

  const onSubmit: SubmitHandler<z.infer<typeof registerScheme>> = async (
    values: z.infer<typeof registerScheme>
  ) => {
    try {
      setIsProcessing(true);
      createApplicationMutation.mutate(values);
      setIsProcessing(false);
      if (window.gtag) {
        window.gtag('event', 'conversion', {
          send_to: 'AW-16605851615/SY9xCMq50roZEN_fpO49',
          value: 1.0,
          currency: 'UAH'
        });
      } else {
        console.error('Google gtag function is not defined');
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
                    errorText={errors.first_name?.message && t(errors.first_name?.message)}
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
                    errorText={errors.last_name?.message && t(errors.last_name?.message)}
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
                    errorText={errors.phone?.message && t(errors.phone?.message)}
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
                    errorText={errors.email?.message && t(errors.email?.message)}
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
                    errorText={errors.company?.message && t(errors.company?.message)}
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
                      errorText={errors.specialization?.message && t(errors.specialization?.message)}
                      options={stack}
                      placeholder={t('Main.forms.speciality')}
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
                        title={t('Main.forms.recruitment_contract')}
                        isRequired={true}
                        errorText={errors.terms?.message && t(errors.terms?.message)}
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
                        errorText={errors.terms_2?.message && t(errors.terms_2?.message)}
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
                    errorText={errors.message?.message && t(errors.message?.message)}
                    placeholder={t('Main.forms.comment')}
                    isRequired={true}
                  />
                )}
              />
            </div>

            <Controller
              name="hpot"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextInput
                  hidden
                  {...field}
                  errorText={errors.hpot?.message && t(errors.hpot?.message)}
                />
              )}
            />

            <div className="text-center">
              <button
                type="submit"
                className="mt-8 w-[231px] rounded-md border border-graphite px-8 py-2 hover:border-transparent hover:bg-green disabled:cursor-not-allowed disabled:border-graphite disabled:bg-inputBgGray disabled:hover:border-graphite"
                disabled={errors && !!Object.keys(errors).length}
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
}

export default RegisterHrForm;
