import { useEffect } from 'react';

import type { UseQueryResult } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import type {
  Control,
  DeepMap,
  FieldError,
  FieldValues,
  UseFieldArrayReturn
} from 'react-hook-form';
import { Controller } from 'react-hook-form';

import { getSpecializations } from '@/api/specialization';
import TrashIcon from '@/components/shared/icons/Admin-icons/TrashIcon';
import { constants } from '@/constants';
import type { ISpecialization } from '@/types/specialization';

import TextInput from './TextInput';

interface IBazaExperienceProps {
  fieldsLength: number;
  control: Control<FieldValues>;
  fieldArray: UseFieldArrayReturn<FieldValues, 'baza_experience', 'id'>;
}

const defaultValues = {
  role: '',
  project_name: '',
  project_duration: ''
};

const BazaExperience: React.FC<IBazaExperienceProps> = ({
  fieldsLength,
  control,
  fieldArray: { fields, append, remove }
}) => {
  const specialization: UseQueryResult<ISpecialization[], Error> = useQuery({
    queryKey: [constants.specialization.FETCH_SPECIALIZATIONS],
    queryFn: getSpecializations
  });

  useEffect(() => {
    if (fieldsLength > 1) {
      for (let i = 1; i < fieldsLength; i++) append;
    }
  }, [fieldsLength, append]);

  return (
    <div className="flex w-full flex-col gap-[30px]">
      {fields.map((field, index) => {
        return (
          <div key={field.id} className="flex w-full flex-col gap-[32px]">
            <div className="flex w-full gap-[24px]">
              <Controller
                name={`baza_experience.${index}.role`}
                control={control}
                render={({
                  field: { onChange, value },
                  formState: { errors }
                }) => (
                  <div className="flex w-full max-w-[442px] grow flex-col gap-[5px]">
                    <label htmlFor={`baza_experience.${index}.role`}>
                      Роль на проекті &nbsp;
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      id={`baza_experience.${index}.role`}
                      value={value}
                      onChange={onChange}
                      className="box-border h-[44px] rounded-[4px] px-[16px] py-[6px] text-black outline-none"
                    >
                      <option value="">Оберіть роль</option>
                      {specialization.data?.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.title}
                        </option>
                      ))}
                    </select>
                    <span className="font-sans text-[12px] text-error">
                      {
                        (
                          errors.baza_experience as DeepMap<
                            FieldValues,
                            FieldError
                          >
                        )?.[index]?.role?.message
                      }
                    </span>
                  </div>
                )}
              />
              <Controller
                name={`baza_experience.${index}.project_name`}
                control={control}
                render={({ field, formState: { errors } }) => (
                  <TextInput
                    {...field}
                    error={
                      (
                        errors.baza_experience as DeepMap<
                          FieldValues,
                          FieldError
                        >
                      )?.[index]?.project_name?.message
                    }
                    isRequired={true}
                    placeholder="Введіть назву"
                    title="Назва проекта"
                  />
                )}
              />

              <Controller
                name={`baza_experience.${index}.project_duration`}
                control={control}
                render={({ field, formState: { errors } }) => (
                  <TextInput
                    {...field}
                    error={
                      (
                        errors.baza_experience as DeepMap<
                          FieldValues,
                          FieldError
                        >
                      )?.[index]?.project_duration?.message
                    }
                    isRequired={true}
                    placeholder="Місяців"
                    title="Тривалість"
                  />
                )}
              />
            </div>

            {index !== 0 ? (
              <div
                onClick={() => remove(index)}
                className="group mx-auto flex h-[44px] w-[120px] cursor-pointer items-center justify-center rounded-[10px] bg-red-600 transition-all duration-300 hover:bg-error"
              >
                <TrashIcon className="size-[22px] fill-graphite transition-all duration-300 group-hover:fill-black" />
              </div>
            ) : null}
          </div>
        );
      })}
      <div
        onClick={() => append(defaultValues)}
        className="flex cursor-pointer justify-end"
      >
        + Додати ще
      </div>
    </div>
  );
};

export default BazaExperience;
