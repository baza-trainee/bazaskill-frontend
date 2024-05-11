import TrashIcon from '@/components/icons/Admin-icons/TrashIcon';
import {
  Control,
  Controller,
  DeepMap,
  FieldError,
  FieldValues,
  UseFieldArrayReturn,
} from 'react-hook-form';
import FileInput from './FileInput';
import SelectField from './SelectField';
import TextInput from './TextInput';
import { useEffect } from 'react';

interface IGraduateProps {
  fieldsLength: number;
  control: Control<FieldValues>;
  fieldArray: UseFieldArrayReturn<
    FieldValues,
    'graduate',
    'id'
  >;
}

const defaultValues = {
  university: '',
  university_specializaton: '',
  university_grade: '',
  graduate_start: '',
  graduate_end: '',
  graduate_sertificate: '',
};

const Graduate = ({
  fieldsLength,
  control,
  fieldArray: { fields, append, remove },
}: IGraduateProps) => {
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
                name={`graduate.${index}.university`}
                control={control}
                render={({
                  field,
                  formState: { errors },
                }) => (
                  <TextInput
                    {...field}
                    error={
                      (
                        errors.graduate as DeepMap<
                          FieldValues,
                          FieldError
                        >
                      )?.[index]?.universiry?.message
                    }
                    isRequired={true}
                    placeholder="Назва навчального закладу"
                    title="Назва навчального закладу"
                  />
                )}
              />
              <Controller
                name={`graduate.${index}.university_specializaton`}
                control={control}
                render={({
                  field,
                  formState: { errors },
                }) => (
                  <TextInput
                    {...field}
                    error={
                      (
                        errors.graduate as DeepMap<
                          FieldValues,
                          FieldError
                        >
                      )?.[index]?.universiry_specializaton
                        ?.message
                    }
                    isRequired={true}
                    placeholder="Введіть назву"
                    title="Cпеціальність"
                  />
                )}
              />

              <Controller
                name={`graduate.${index}.university_grade`}
                control={control}
                render={({
                  field: { onChange, value },
                  formState: { errors },
                }) => (
                  <SelectField
                    title="Cтупінь освіти"
                    value={value}
                    values={[
                      'Bachelor',
                      'Master',
                      'Not complete',
                      'Secondary professional',
                    ]}
                    onChange={onChange}
                    errors={
                      (
                        errors.graduate as DeepMap<
                          FieldValues,
                          FieldError
                        >
                      )?.[index]?.universiry_grade?.message
                    }
                    placeholder="Оберіть якщо є"
                  />
                )}
              />
            </div>

            <div className="flex w-full gap-[24px]">
              <Controller
                name={`graduate.${index}.graduate_start`}
                control={control}
                render={({
                  field,
                  formState: { errors },
                }) => (
                  <TextInput
                    {...field}
                    error={
                      (
                        errors.graduate as DeepMap<
                          FieldValues,
                          FieldError
                        >
                      )?.[index]?.graduate_start?.message
                    }
                    isRequired={false}
                    placeholder="dd.mm.yyyy"
                    title="Початок навчання"
                  />
                )}
              />

              <Controller
                name={`graduate.${index}.graduate_end`}
                control={control}
                render={({
                  field,
                  formState: { errors },
                }) => (
                  <TextInput
                    {...field}
                    error={
                      (
                        errors.graduate as DeepMap<
                          FieldValues,
                          FieldError
                        >
                      )?.[index]?.graduate_end?.message
                    }
                    isRequired={false}
                    placeholder="dd.mm.yyyy"
                    title="Випуск"
                  />
                )}
              />

              <Controller
                name={`graduate.${index}.graduate_sertificate`}
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
                        errors.graduate as DeepMap<
                          FieldValues,
                          FieldError
                        >
                      )?.[index]?.graduate_sertificate
                        ?.message
                    }
                  />
                )}
              />
            </div>
            <div
              onClick={() => remove(index)}
              className="group mx-auto flex h-[44px] w-[120px] cursor-pointer items-center justify-center rounded-[10px] bg-red-600 transition-all duration-300 hover:bg-error"
            >
              <TrashIcon className="h-[22px] w-[22px] fill-graphite transition-all duration-300 group-hover:fill-black" />
            </div>
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

export default Graduate;
