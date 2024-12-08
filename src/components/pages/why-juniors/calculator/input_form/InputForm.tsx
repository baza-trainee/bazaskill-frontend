import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';

import { useValues } from '@/stores/useValuesStore';

import Indicator from './Indicator';
import InfoField from './InfoField';
import InputText from './InputText';
import {
  Item,
  itemSalary,
  itemProfit,
  itemEducation,
  itemMentorshipTime,
  itemMiddleSalary,
  itemProfitLoss
} from './data';
import { FormValues, formSchema, initialValues } from './validationScheme';

export default function InputForm() {
  const t = useTranslations('Calculator');
  const { setValues } = useValues();

  const {
    register,
    handleSubmit,
    formState: { errors, submitCount },
    reset
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues
  });

  const [openFields, setOpenFields] = useState<{ [key: string]: boolean }>({
    salary: false,
    profit: false,
    educationCost: false,
    menthorshipTime: false,
    middleSalary: false,
    profitLoss: false
  });

  const openField = (item: Item) => {
    setOpenFields((prev) => ({
      ...prev,
      [item.name]: !prev[item.name]
    }));
  };

  const onSubmit = (values: FormValues) => {
    const newValues = {
      salary: Number(values.salary),
      profit: Number(values.profit),
      educationCost: Number(values.educationCost),
      menthorshipTime: Number(values.menthorShipTime),
      middleSalary: Number(values.middleSalary),
      profitLoss: Number(values.profitLoss)
    };

    // Validate that all numbers are positive
    const isValid = Object.values(newValues).every((value) => value > 0);
    if (!isValid) {
      return;
    }

    setValues(newValues);
    reset();
  };

  return (
    <div className="mt-10 grid grid-cols-[80vw] rounded-lg border border-green p-4 md:grid-cols-[514px] lg:mt-0 lg:p-10">
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className="grid gap-6 p-0">
        {/* Salary of Junior */}
        <div className="relative grid grid-cols-[1fr_34px] p-0">
          <div className="bg-gray-100 grid gap-4 rounded-md border border-green p-4">
            <Indicator item={itemSalary} isOpen={openFields.salary} openField={openField} />
            <div className={openFields.salary ? 'block' : 'hidden'}>
              <InputText {...register('salary')} error={errors.salary?.message} />
            </div>
          </div>
          {!openFields.salary && <InfoField item={itemSalary} />}
        </div>

        {/* Education Cost Field */}
        <div className="relative grid grid-cols-[1fr_34px] p-0">
          <div className="bg-gray-100 grid gap-4 rounded-md border border-green p-4">
            <Indicator
              item={itemEducation}
              isOpen={openFields.educationCost}
              openField={openField}
            />
            <div className={openFields.educationCost ? 'block' : 'hidden'}>
              <InputText {...register('educationCost')} error={errors.educationCost?.message} />
            </div>
          </div>
          {!openFields.educationCost && <InfoField item={itemEducation} />}
        </div>

        {/* Mentorship Time Field */}
        <div className="relative grid grid-cols-[1fr_34px] p-0">
          <div className="bg-gray-100 grid gap-4 rounded-md border border-green p-4">
            <Indicator
              item={itemMentorshipTime}
              isOpen={openFields.menthorshipTime}
              openField={openField}
            />
            <div className={openFields.menthorshipTime ? 'block' : 'hidden'}>
              <InputText {...register('menthorShipTime')} error={errors.menthorShipTime?.message} />
            </div>
          </div>
          {!openFields.menthorshipTime && <InfoField item={itemMentorshipTime} />}
        </div>

        {/* Middle Salary Per Hour */}
        <div className="relative grid grid-cols-[1fr_34px] p-0">
          <div className="bg-gray-100 grid gap-4 rounded-md border border-green p-4">
            <Indicator
              item={itemMiddleSalary}
              isOpen={openFields.middleSalary}
              openField={openField}
            />
            <div className={openFields.middleSalary ? 'block' : 'hidden'}>
              <InputText {...register('middleSalary')} error={errors.middleSalary?.message} />
            </div>
          </div>
          {!openFields.middleSalary && <InfoField item={itemMiddleSalary} />}
        </div>

        {/* Additional profit of junior education */}
        <div className="relative grid grid-cols-[1fr_34px] p-0">
          <div className="bg-gray-100 grid gap-4 rounded-md border border-green p-4">
            <Indicator item={itemProfit} isOpen={openFields.profit} openField={openField} />
            <div className={openFields.profit ? 'block' : 'hidden'}>
              <InputText {...register('profit')} error={errors.profit?.message} />
            </div>
          </div>
          {!openFields.profit && <InfoField item={itemProfit} />}
        </div>

        {/* Profit Loss */}
        <div className="relative grid grid-cols-[1fr_34px] p-0">
          <div className="bg-gray-100 grid gap-4 rounded-md border border-green p-4">
            <Indicator item={itemProfitLoss} isOpen={openFields.profitLoss} openField={openField} />
            <div className={openFields.profitLoss ? 'block' : 'hidden'}>
              <InputText {...register('profitLoss')} error={errors.profitLoss?.message} />
            </div>
          </div>
          {!openFields.profitLoss && <InfoField item={itemProfitLoss} />}
        </div>

        {submitCount > 0 && Object.keys(errors).length > 0 && (
          <div className="text-red-500">Будь ласка, заповніть усі поля.</div>
        )}

        <button
          type="submit"
          className="mt-4 rounded-md bg-green px-4 py-2 text-white hover:bg-green-600"
        >
          {t('button_submit')}
        </button>
      </form>
    </div>
  );
}
