import TrashIcon from '@/components/icons/Admin-icons/TrashIcon';
import {
  Control,
  Controller,
  DeepMap,
  FieldError,
  FieldValues,
  UseFieldArrayReturn,
  UseFormGetValues,
} from 'react-hook-form';
import SelectField from './SelectField';
interface ILanguagesProps {
  control: Control<FieldValues>;
  fieldArray: UseFieldArrayReturn<
    FieldValues,
    'languages',
    'id'
  >;
  getValues: UseFormGetValues<FieldValues>;
}
const Languages = ({
  control,
  fieldArray: { fields, append, remove },
  getValues,
}: ILanguagesProps) => {
  const handleDisable = (value: string): boolean => {
    return getValues().languages.find(
      (el: { language: string; level: string }) =>
        el.language === value
    )
      ? true
      : false;
  };
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
                name={`languages.${index}.language`}
                control={control}
                render={({
                  field: { onChange, value },
                  formState: { errors },
                }) => (
                  <SelectField
                    title="Іноземна мова"
                    value={value}
                    values={[
                      'English',
                      'Polish',
                      'German',
                      'French',
                      'Spanish',
                    ]}
                    onChange={onChange}
                    disableHandler={handleDisable}
                    isRequired={true}
                    errors={
                      (
                        errors.languages as DeepMap<
                          FieldValues,
                          FieldError
                        >
                      )?.[index]?.language?.message
                    }
                  />
                )}
              />
              <Controller
                name={`languages.${index}.level`}
                control={control}
                render={({
                  field: { onChange, value },
                  formState: { errors },
                }) => (
                  <SelectField
                    title="Іноземна мова"
                    value={value}
                    isRequired={true}
                    values={[
                      'A1',
                      'A2',
                      'B1',
                      'B2',
                      'C1',
                      'C2',
                    ]}
                    onChange={onChange}
                    errors={
                      (
                        errors.languages as DeepMap<
                          FieldValues,
                          FieldError
                        >
                      )?.[index]?.level?.message
                    }
                  />
                )}
              />
              <div
                className={`flex items-end ${index === 0 ? 'justify-end' : 'justify-between'} mb-[5px] h-[44px] w-full max-w-[442px] grow gap-[5px] self-end`}
              >
                {index !== 0 ? (
                  <div
                    onClick={() => remove(index)}
                    className="group flex h-[44px] w-[60px] cursor-pointer items-center justify-center rounded-[10px] bg-red-600 transition-all duration-300 hover:bg-error"
                  >
                    <TrashIcon className="h-[22px] w-[22px] fill-graphite transition-all duration-300 group-hover:fill-black" />
                  </div>
                ) : null}
                {getValues().languages.length - 1 ===
                index ? (
                  <div
                    onClick={append}
                    className="flex h-full cursor-pointer items-center justify-center "
                  >
                    + Додати ще
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Languages;
