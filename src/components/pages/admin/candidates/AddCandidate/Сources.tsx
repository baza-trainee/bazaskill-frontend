import type {
  Control,
  DeepMap,
  FieldError,
  FieldValues,
  UseFieldArrayReturn,
} from 'react-hook-form';

import {
  Controller,
} from 'react-hook-form';

import TrashIcon from '@/components/shared/icons/Admin-icons/TrashIcon';

import FileInput from './FileInput';
import TextInput from './TextInput';

interface ICourcesProps {
  control: Control<FieldValues>;
  fieldArray: UseFieldArrayReturn<
    FieldValues,
    'cources',
    'id'
  >;
}
const Cources: React.FC<ICourcesProps> = ({
  control,
  fieldArray: { fields, append, remove },
}) => {
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
                name={`cources.${index}.cources_name`}
                control={control}
                render={({
                  field,
                  formState: { errors },
                }) => (
                  <TextInput
                    {...field}
                    error={
                      (
                        errors.cources as DeepMap<
                          FieldValues,
                          FieldError
                        >
                      )?.[index]?.cources_name?.message
                    }
                    isRequired={false}
                    placeholder="Ведіть назву"
                    title="Назва курсів"
                  />
                )}
              />
              <Controller
                name={`cources.${index}.cources_specializaton`}
                control={control}
                render={({
                  field,
                  formState: { errors },
                }) => (
                  <TextInput
                    {...field}
                    error={
                      (
                        errors.cources as DeepMap<
                          FieldValues,
                          FieldError
                        >
                      )?.[index]?.cources_specializaton
                        ?.message
                    }
                    isRequired={false}
                    placeholder="Введіть назву"
                    title="Cпеціальність"
                  />
                )}
              />

              <Controller
                name={`cources.${index}.cources_sertificate`}
                control={control}
                render={({
                  field: { onChange, value },
                  formState: { errors },
                }) => (
                  <FileInput
                    onChange={onChange}
                    value={value}
                    title="Завантажити сертифікат"
                    errors={
                      (
                        errors.cources as DeepMap<
                          FieldValues,
                          FieldError
                        >
                      )?.[index]?.cources_sertificate
                        ?.message
                    }
                  />
                )}
              />
            </div>

            <div className="flex w-full gap-[24px]">
              <Controller
                name={`cources.${index}.cources_start`}
                control={control}
                render={({
                  field,
                  formState: { errors },
                }) => (
                  <TextInput
                    {...field}
                    error={
                      (
                        errors.cources as DeepMap<
                          FieldValues,
                          FieldError
                        >
                      )?.[index]?.cources_start?.message
                    }
                    isRequired={false}
                    placeholder="dd.mm.yyyy"
                    title="Початок навчання"
                  />
                )}
              />

              <Controller
                name={`cources.${index}.cources_end`}
                control={control}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    error=""
                    isRequired={false}
                    placeholder="dd.mm.yyyy"
                    title="Випуск"
                  />
                )}
              />

              <div className="flex w-full max-w-[442px] grow flex-col gap-[5px]"></div>
            </div>
            <div
              onClick={() => remove(index)}
              className="group mx-auto flex h-[44px] w-[120px] cursor-pointer items-center justify-center rounded-[10px] bg-red-600 transition-all duration-300 hover:bg-error"
            >
              <TrashIcon className="size-[22px] fill-graphite transition-all duration-300 group-hover:fill-black" />
            </div>
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

export default Cources;
