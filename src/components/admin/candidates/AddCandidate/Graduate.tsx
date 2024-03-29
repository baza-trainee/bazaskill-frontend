import TrashIcon from '@/components/icons/Admin-icons/TrashIcon';
import {
  Control,
  Controller,
  DeepMap,
  FieldError,
  FieldErrors,
  FieldValues,
  UseFieldArrayReturn,
  UseFormRegister,
} from 'react-hook-form';
import FileInput from './FileInput';
import TextInput from './TextInput';
interface IGraduateProps {
  control: Control<FieldValues>;
  errors: FieldErrors<FieldValues>;
  fieldArray: UseFieldArrayReturn<
    FieldValues,
    'graduate',
    'id'
  >;
  register: UseFormRegister<FieldValues>;
}
const Graduate = ({
  control,
  errors,
  fieldArray: { fields, append, remove },
}: IGraduateProps) => {
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
                name={`graduate.${index}.universiry`}
                control={control}
                render={({ field }) => (
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
                name={`graduate.${index}.universiry_specializaton`}
                control={control}
                render={({ field }) => (
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
                name={`graduate.${index}.universiry_grade`}
                control={control}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    error={
                      (
                        errors.graduate as DeepMap<
                          FieldValues,
                          FieldError
                        >
                      )?.[index]?.universiry_grade?.message
                    }
                    isRequired={true}
                    placeholder="Введіть назву"
                    title="Cтупінь освіти"
                  />
                )}
              />
            </div>

            <div className="flex w-full gap-[24px]">
              <Controller
                name={`graduate.${index}.graduate_start`}
                control={control}
                render={({ field }) => (
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
                    isRequired={true}
                    placeholder="dd.mm.yyyy"
                    title="Початок навчання"
                  />
                )}
              />

              <Controller
                name={`graduate.${index}.graduate_end`}
                control={control}
                render={({ field }) => (
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
                    isRequired={true}
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
        onClick={append}
        className="flex cursor-pointer justify-end"
      >
        + Додати ще
      </div>
    </div>
  );
};

export default Graduate;
