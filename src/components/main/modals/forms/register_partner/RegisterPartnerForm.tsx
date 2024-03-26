'use client';

import * as z from 'zod';

import React, { useState } from 'react';
import {
  Controller,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { stack } from './data';
import { defaultValues } from './defaultValues';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerScheme } from './validationScheme';
import { useModal } from '@/stores/useModal';
import { createApplication } from '@/api/partner_application';
import { useLocale } from 'next-intl';
import { localizeCountry } from '@/helpers/localizeCountry';

import PhoneInput from '@/components/main/ui/form_inputs/PhoneInput';
import SelectInput from '@/components/main/ui/form_inputs/SelectInput';
import TextInput from '@/components/main/ui/form_inputs/TextInput';
import TextArea from '@/components/main/ui/form_inputs/TextArea';
import CustomCheckbox from '@/components/main/ui/form_inputs/CustomCheckbox';
import SuccessModal from '../SuccesModal';
import { constants } from '@/constants';
import {
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';

const RegisterPartnerForm = () => {
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
        queryKey: [
          constants.partner_applications
            .FETCH_PARTNER_APPLICATIONS,
        ],
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
            {t('Main.forms.to_become_partner')}
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
            className="mb-[32px] flex flex-col"
          >
            <div className="flex flex-col items-center md:flex-row md:items-stretch md:justify-center">
              <Controller
                name="company_name"
                control={control}
                render={({ field }) => (
                  <TextInput
                    title={t('Main.forms.company_name')}
                    {...field}
                    errorText={t(
                      errors.company_name?.message
                    )}
                    placeholder={t('Main.forms.name')}
                    isRequired={true}
                  />
                )}
              />
              <Controller
                name="company_url"
                control={control}
                render={({ field }) => (
                  <TextInput
                    title={t('Main.forms.company_website')}
                    {...field}
                    errorText={t(
                      errors.company_url?.message
                    )}
                    placeholder={t('Main.forms.website')}
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
                name="position"
                control={control}
                render={({ field }) => (
                  <TextInput
                    title={t('Main.forms.position_name')}
                    {...field}
                    errorText={t(errors.position?.message)}
                    placeholder={t('Main.forms.position')}
                    isRequired={true}
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
            <Controller
              name="specialist"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <SelectInput
                  errorText={t(errors.specialist?.message)}
                  title={t('Main.forms.search')}
                  {...field}
                  options={stack}
                  placeholder={t('Main.forms.speciality')}
                  isRequired={true}
                />
              )}
            />
            <div className="flex"></div>
            <div className="flex flex-col md:flex-row md:items-stretch md:justify-center">
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
              <div className="mt-[20px] flex-col md:mt-[32px]">
                <Controller
                  name="terms"
                  control={control}
                  render={({ field }) => (
                    <CustomCheckbox
                      {...field}
                      title={t(
                        'Main.forms.partner_contract'
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
                      errorText={t(errors.terms_2?.message)}
                    />
                  )}
                />
              </div>
            </div>
            <div className="text-center ">
              <button
                type="submit"
                className="disabled:border-graaphite mt-[2rem] w-[231px] rounded-md border border-graphite px-8 py-2 hover:border-transparent hover:bg-green disabled:cursor-not-allowed disabled:bg-inputBgGray disabled:hover:border-graphite"
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

export default RegisterPartnerForm;
