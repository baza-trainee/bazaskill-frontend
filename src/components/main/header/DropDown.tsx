'use client';

import * as z from 'zod';
import {
  useForm,
  SubmitHandler,
  UseFormRegister,
  FieldValues,
  FieldErrors,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const DropDown = ({
  title,
  inputs,
}: {
  title: string;
  inputs: string[];
}) => {
  const schema = z.object({
    stack: z
      .string()
      .array()
      .nonempty({ message: 'Can`t be empty' }),
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: zodResolver(schema),
    defaultValues: { stack: [] },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) =>
    console.log(data);

  return (
    <div>
      <h3>{title}</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          {inputs.map((item: string) => (
            <StackItem
              key={item}
              title={item}
              register={register}
              errors={errors}
            />
          ))}
        </div>
        <button>Знайти</button>
        <span>{errors.stack?.message as string}</span>
      </form>
    </div>
  );
};

const StackItem = ({
  title,
  register,
  errors,
}: {
  title: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}) => {
  return (
    <div>
      <label>{title}</label>
      <input
        {...register('stack')}
        value={title}
        name="stack"
        type="checkbox"
      />
    </div>
  );
};

export default DropDown;
