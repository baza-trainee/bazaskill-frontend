import { Formik, Form, useFormikContext } from "formik";
import { useTranslations } from "next-intl";
import InputText from "./InputText";
import InputRadio from "./InputRadio";
import {
  specialities,
  skills,
  times,
  itemSpecialization,
  itemLevel,
  itemSalary,
  itemEducation,
  itemProjectValue,
  itemProductivity,
  itemFullProductivityYears,
  Item,
} from "./data";
import Indicator from "./Indicator";
import InfoField from "./InfoField";
import { useState } from "react";
import { useValues } from "@/stores/useValuesStore";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  specialization: Yup.string().required("Це поле є обов'язковим "),
  level: Yup.string().required("Це поле є обов'язковим "),
  salary: Yup.number()
    .integer("Значення має бути цілим числом")
    .positive("Значення має бути більше нуля")
    .required("Це поле є обов'язковим "),
  educationCost: Yup.number()
    .integer("Значення має бути цілим числом")
    .positive("Значення має бути більше нуля")
    .required("Це поле є обов'язковим "),
  projectValue: Yup.number()
    .integer("Значення має бути цілим числом")
    .positive("Значення має бути більше нуля")
    .required("Це поле є обов'язковим "),
  productivity: Yup.number()
    .integer("Значення має бути цілим числом")
    .positive("Значення має бути більше нуля")
    .required("Це поле є обов'язковим "),
  fullProductivityYears: Yup.string().required("Це поле є обов'язковим "),
});

export interface Values {
  specialization: string;
  level: string;
  salary: number;
  educationCost: number;
  projectValue: number;
  productivity: number;
  fullProductivityYears: string;
}

const initialValues: Values = {
  specialization: "",
  level: "",
  salary: 0,
  educationCost: 0,
  projectValue: 0,
  productivity: 0,
  fullProductivityYears: "",
};

const ErrorSummary = () => {
  const { errors, submitCount } = useFormikContext();
  return (
    submitCount > 0 &&
    Object.keys(errors).length > 0 && (
      <div className="text-red-500">Будь ласка, заповніть усі поля.</div>
    )
  );
};

export default function InputForm() {
  const t = useTranslations("Calculator");
  const { setValues } = useValues();
  const [openFields, setOpenFields] = useState<{ [key: string]: boolean }>({
    specialization: false,
    level: false,
    salary: false,
    educationCost: false,
    projectValue: false,
    productivity: false,
    fullProductivityYears: false,
  });

  const openField = (item: Item) => {
    setOpenFields((prev) => ({
      ...prev,
      [item.name]: !prev[item.name],
    }));
  };

  return (
    <div className="mt-10 lg:mt-0 grid grid-cols-[80vw] md:grid-cols-[514px] border border-green rounded-lg p-4 lg:p-10">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values: Values, { resetForm }) => {
          setValues(values);
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form autoComplete="off" className="grid gap-6 p-0">
            {/* Specialization Field */}
            <div className="relative grid grid-cols-[1fr_34px] p-0">
              <div className="grid gap-4 border border-green rounded-md bg-gray-100 p-4">
                <Indicator
                  item={itemSpecialization}
                  isOpen={openFields.specialization}
                  openField={openField}
                />
                <div className={openFields.specialization ? "block" : "hidden"}>
                  <ul
                    role="group"
                    aria-labelledby="radio-group"
                    className="grid list-none pl-9"
                  >
                    {specialities.map((el, i) => (
                      <InputRadio
                        name="specialization"
                        key={i}
                        type="radio"
                        value={el}
                      >
                        {el}
                      </InputRadio>
                    ))}
                  </ul>
                </div>
              </div>
              {!openFields.specialization &&  <InfoField item={itemSpecialization} />}
            </div>

            {/* Level Field */}
            <div className="relative grid grid-cols-[1fr_34px] p-0">
              <div className="grid gap-4 border border-green rounded-md bg-gray-100 p-4">
                <Indicator
                  item={itemLevel}
                  isOpen={openFields.level}
                  openField={openField}
                />
                <div className={openFields.level ? "block" : "hidden"}>
                  <ul
                    role="group"
                    aria-labelledby="radio-group"
                    className="grid list-none pl-9"
                  >
                    {skills.map((el, i) => (
                      <InputRadio name="level" key={i} type="radio" value={el}>
                        {el}
                      </InputRadio>
                    ))}
                  </ul>
                </div>
              </div>
              {!openFields.level &&  <InfoField item={itemLevel} />}
            </div>

            {/* Salary Field */}
            <div className="relative grid grid-cols-[1fr_34px] p-0">
              <div className="grid gap-4 border border-green rounded-md bg-gray-100 p-4">
                <Indicator
                  item={itemSalary}
                  isOpen={openFields.salary}
                  openField={openField}
                />
                <div className={openFields.salary ? "block" : "hidden"}>
                  <InputText name="salary" />
                </div>
              </div>
              {!openFields.salary &&  <InfoField item={itemSalary} />}
            </div>

            {/* Education Cost Field */}
            <div className="relative grid grid-cols-[1fr_34px] p-0">
              <div className="grid gap-4 border border-green rounded-md bg-gray-100 p-4">
                <Indicator
                  item={itemEducation}
                  isOpen={openFields.educationCost}
                  openField={openField}
                />
                <div className={openFields.educationCost ? "block" : "hidden"}>
                  <InputText name="educationCost" />
                </div>
              </div>
              {!openFields.education &&  <InfoField item={itemEducation} />}
            </div>

            {/* Mentorship Cost Field */}
            <div className="relative grid grid-cols-[1fr_34px] p-0">
              <div className="grid gap-4 border border-green rounded-md bg-gray-100 p-4">
                <Indicator
                  item={itemProjectValue}
                  isOpen={openFields.projectValue}
                  openField={openField}
                />
                <div
                  className={openFields.projectValue ? "block" : "hidden"}
                >
                  <InputText name="projectValue" />
                </div>
              </div>
              {!openFields.mentorshipCost &&  <InfoField item={itemProjectValue} />}
            </div>

            {/* Productivity Field */}
            <div className="relative grid grid-cols-[1fr_34px] p-0">
              <div className="grid gap-4 border border-green rounded-md bg-gray-100 p-4">
                <Indicator
                  item={itemProductivity}
                  isOpen={openFields.productivity}
                  openField={openField}
                />
                <div className={openFields.productivity ? "block" : "hidden"}>
                  <InputText name="productivity" />
                </div>
              </div>
              {!openFields.productivity &&  <InfoField item={itemProductivity} />}
            </div>

            {/* Full Productivity Years Field */}
            <div className="relative grid grid-cols-[1fr_34px] p-0">
              <div className="grid gap-4 border border-green rounded-md bg-gray-100 p-4">
                <Indicator
                  item={itemFullProductivityYears}
                  isOpen={openFields.fullProductivityYears}
                  openField={openField}
                />
                <div
                  className={openFields.fullProductivityYears ? "block" : "hidden"}
                >
                  <ul
                    role="group"
                    aria-labelledby="radio-group"
                    className="grid list-none pl-9"
                  >
                    {times.map((el, i) => (
                      <InputRadio
                        name="fullProductivityYears"
                        key={i}
                        type="radio"
                        value={el}
                      >
                        {el}
                      </InputRadio>
                    ))}
                  </ul>
                </div>
              </div>
              {!openFields.fullProductivityYears &&  <InfoField item={itemFullProductivityYears} />}
            </div>

            {/* Submit Button and Error Summary */}
            <div className="grid grid-cols-[1fr_160px]">
              <div>
                <ErrorSummary />
              </div>
              <button
                type="submit"
                className="flex justify-center items-center w-[160px] h-[44px] border-none rounded-[4px] shadow-[inset_2px_2px_8px_16px_rgba(0,0,0,0.25)] bg-gradient-to-br from-[#5bff75] to-[#fff854] text-[#212121] font-roboto font-medium text-[18px] leading-[1.5] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {t('button_submit')}
              </button>

            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
