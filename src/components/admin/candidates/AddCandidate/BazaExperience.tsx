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
import TextInput from './TextInput';

interface IBazaExperienceProps {
  control: Control<FieldValues>;
  fieldArray: UseFieldArrayReturn<
    FieldValues,
    'baza_experience',
    'id'
  >;
}
const BazaExperience: React.FC<IBazaExperienceProps> = ({
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
                name={`baza_experience.${index}.role`}
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
                      )?.[index]?.role?.message
                    }
                    isRequired={true}
                    placeholder="Ведіть назву"
                    title="Роль на проекті"
                  />
                )}
              />
              <Controller
                name={`baza_experience.${index}.project_name`}
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

export default BazaExperience;
