import { useState } from 'react';

import { Form, Formik, useFormikContext } from 'formik';
import { useTranslations } from 'next-intl';
import * as Yup from 'yup';

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

const validationSchema = Yup.object().shape({
  salary: Yup.number()
    .integer('Значення має бути цілим числом')
    .positive('Значення має бути більше нуля')
    .required("Це поле є обов'язковим "),
  profit: Yup.number()
    .integer('Значення має бути цілим числом')
    .positive('Значення має бути більше нуля')
    .required("Це поле є обов'язковим "),
  educationCost: Yup.number()
    .integer('Значення має бути цілим числом')
    .positive('Значення має бути більше нуля')
    .required("Це поле є обов'язковим "),
  menthorShipTime: Yup.number()
    .integer('Значення має бути цілим числом')
    .positive('Значення має бути більше нуля')
    .required("Це поле є обов'язковим "),
  middleSalary: Yup.number()
    .integer('Значення має бути цілим числом')
    .positive('Значення має бути більше нуля')
    .required("Це поле є обов'язковим "),
  profitLoss: Yup.number()
    .integer('Значення має бути цілим числом')
    .positive('Значення має бути більше нуля')
    .required("Це поле є обов'язковим "),
});

export interface Values {
  salary: string;
  profit: string;
  educationCost: string;
  menthorshipTime: string;
  middleSalary: string;
  profitLoss: string;
}

const initialValues: Values = {
  salary: '',
  profit: '',
  educationCost: '',
  menthorshipTime: '',
  middleSalary: '',
  profitLoss: ''
};

const ErrorSummary = () => {
  const { errors, submitCount } = useFormikContext();
  return (
    submitCount > 0 &&
    Object.keys(errors).length > 0 && (
      <div className="text-red-500">
        Будь ласка, заповніть усі поля.</div>
    )
  );
};

export default function InputForm() {
  const t = useTranslations('Calculator');

  const { setValues } = useValues();

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

  return (
    <div className="mt-10 grid grid-cols-[80vw] rounded-lg border border-green p-4 md:grid-cols-[514px] lg:mt-0 lg:p-10">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values: Values, { resetForm }) => {
          const newValues = {
            salary: Number(values.salary),
            profit: Number(values.profit),
            educationCost: Number(values.educationCost),
            menthorshipTime: Number(values.menthorshipTime),
            middleSalary: Number(values.middleSalary),
            profitLoss: Number(values.profitLoss)
          }
          setValues(newValues);
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form autoComplete="off" className="grid gap-6 p-0">

            {/* Salary of Junior */}
            <div className="relative grid grid-cols-[1fr_34px] p-0">
              <div className="bg-gray-100 grid gap-4 rounded-md border border-green p-4">
                <Indicator
                  item={itemSalary}
                  isOpen={openFields.salary}
                  openField={openField}
                />
                <div className={openFields.salary ? 'block' : 'hidden'}>
                  <InputText name="salary" />
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
                  <InputText name="educationCost" />
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
                <div className={openFields.mentorshipTime ? 'block' : 'hidden'}>
                  <InputText name="menthorShipTime" />
                </div>
              </div>
              {!openFields.mentorshipTime && (
                <InfoField item={itemMentorshipTime} />
              )}
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
                  <InputText name="middleSalary" />
                </div>
              </div>
              {!openFields.middleSalary && <InfoField item={itemMiddleSalary} />}
            </div>

            {/* Additional profit of junior education */}
            <div className="relative grid grid-cols-[1fr_34px] p-0">
              <div className="bg-gray-100 grid gap-4 rounded-md border border-green p-4">
                <Indicator
                  item={itemProfit}
                  isOpen={openFields.profit}
                  openField={openField}
                />
                <div className={openFields.profit ? 'block' : 'hidden'}>
                  <InputText name="profit" />
                </div>
              </div>
              {!openFields.profit && <InfoField item={itemProfit} />}
            </div>

            {/* Profit Loss */}
            <div className="relative grid grid-cols-[1fr_34px] p-0">
              <div className="bg-gray-100 grid gap-4 rounded-md border border-green p-4">
                <Indicator
                  item={itemProfitLoss}
                  isOpen={openFields.profitLoss}
                  openField={openField}
                />
                <div className={openFields.profitLoss ? 'block' : 'hidden'}>
                  <InputText name="profitLoss" />
                </div>
              </div>
              {!openFields.profitLoss && <InfoField item={itemProfitLoss} />}
            </div>



            {/* Submit Button and Error Summary */}
            <div className="grid grid-cols-[1fr_160px]">
              <div>
                <ErrorSummary />
              </div>
              <button
                type="submit"
                className="font-roboto flex h-[44px] w-[160px] cursor-pointer 
                items-center justify-center rounded-[4px] border-none bg-gradient-to-br 
                from-[#5bff75] to-[#fff854] text-[18px] font-medium leading-[1.5] 
                text-[#212121] shadow-[inset_2px_2px_8px_16px_rgba(0,0,0,0.25)]
                 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? t('button_processing') : t('button_submit')}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
