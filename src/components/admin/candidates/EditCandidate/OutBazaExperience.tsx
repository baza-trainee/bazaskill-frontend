import TrashIcon from '@/components/icons/Admin-icons/TrashIcon';
import {
  Control,
  Controller,
  DeepMap,
  FieldError,
  FieldValues,
  UseFieldArrayReturn,
} from 'react-hook-form';
import TextInput from './TextInput';
import { useEffect } from 'react';

interface IOutBazaExperienceProps {
  fieldsLength: number;
  control: Control<FieldValues>;
  fieldArray: UseFieldArrayReturn<
    FieldValues,
    'out_baza_experience',
    'id'
  >;
}

const OutBazaExperience: React.FC<
  IOutBazaExperienceProps
> = ({
  fieldsLength,
  control,
  fieldArray: { fields, append, remove },
}) => {
  useEffect(() => {
    if (fieldsLength > 1) {
      for (let i = 1; i < fieldsLength; i++) append;
    }
  }, [fieldsLength, append]);

  return (
    <div className="flex w-full flex-col gap-[30px]">
      {fields.map((field, index) => {
        return (
          <div
            key={field.id}
            className="flex w-full flex-col gap-[32px]"
          >
            <div className="flex w-full gap-[24px]">
              <Controller
                name={`out_baza_experience.${index}.company_name`}
                control={control}
                render={({
                  field,
                  formState: { errors },
                }) => (
                  <TextInput
                    {...field}
                    error={
                      (
                        errors.out_baza_experience as DeepMap<
                          FieldValues,
                          FieldError
                        >
                      )?.[index]?.company_name?.message
                    }
                    isRequired={true}
                    placeholder="Введіть назву компанії"
                    title="Назва компанії"
                  />
                )}
              />
              <Controller
                name={`out_baza_experience.${index}.company_specialization`}
                control={control}
                render={({
                  field,
                  formState: { errors },
                }) => (
                  <TextInput
                    {...field}
                    error={
                      (
                        errors.baza_experience as DeepMap<
                          FieldValues,
                          FieldError
                        >
                      )?.[index]?.company_specialization
                        ?.message
                    }
                    isRequired={true}
                    placeholder="Введіть спеціалізацію компанії"
                    title="Спеціалізація компанії"
                  />
                )}
              />
            </div>

            <div className="flex w-full gap-[24px]">
              <Controller
                name={`out_baza_experience.${index}.work_start`}
                control={control}
                render={({
                  field,
                  formState: { errors },
                }) => (
                  <TextInput
                    {...field}
                    error={
                      (
                        errors.baza_experience as DeepMap<
                          FieldValues,
                          FieldError
                        >
                      )?.[index]?.work_start?.message
                    }
                    isRequired={true}
                    placeholder="Введіть дату початка співпраці"
                    title="Початок співпраці"
                  />
                )}
              />
              <Controller
                name={`out_baza_experience.${index}.work_end`}
                control={control}
                render={({
                  field,
                  formState: { errors },
                }) => (
                  <TextInput
                    {...field}
                    error={
                      (
                        errors.baza_experience as DeepMap<
                          FieldValues,
                          FieldError
                        >
                      )?.[index]?.work_end?.message
                    }
                    isRequired={true}
                    placeholder="Введіть дату закінчення співпраці"
                    title="Кінець співпраці"
                  />
                )}
              />
            </div>

            {index !== 0 ? (
              <div
                onClick={() => remove(index)}
                className="group mx-auto flex h-[44px] w-[120px] cursor-pointer items-center justify-center rounded-[10px] bg-red-600 transition-all duration-300 hover:bg-error"
              >
                <TrashIcon className="h-[22px] w-[22px] fill-graphite transition-all duration-300 group-hover:fill-black" />
              </div>
            ) : null}
          </div>
        );
      })}
      <div
        onClick={append}
        className="flex cursor-pointer justify-end"
      >
        + Додати ще
      </div>
    </div>
  );
};

export default OutBazaExperience;
