import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  useForm,
  SubmitHandler,
  FieldValues,
} from 'react-hook-form';
import CustomInput from './CustomInput';
import { Ref, RefObject } from 'react';
import { SpecializationStack } from '@/types/specialization';
const SubMenu = ({
  inputs,
  reference,
}: {
  inputs: SpecializationStack[];
  reference: RefObject<HTMLFormElement>;
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
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: zodResolver(schema),
    defaultValues: { stack: [] },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) =>
    console.log(data);
  return (
    <form
      className="absolute left-0 top-[100%] flex w-[250px] flex-col rounded-[4px] rounded-tl-none border-[2px] border-[#4E4E4E] bg-[#202020] xl:group-last/item:w-[230px] 3xl:group-last/item:w-[250px] "
      onSubmit={handleSubmit(onSubmit)}
      ref={reference}
    >
      <div>
        {inputs.map(({ title, id }) => (
          <CustomInput
            key={id}
            title={title}
            register={register}
          />
        ))}
      </div>
      <button className="relative mx-auto my-[14px] flex h-[36px] w-[72%] items-center justify-center rounded-[6px] border-[2px] border-yellow text-[16px] leading-[36px] text-yellow">
        Знайти
      </button>
      <span className="relative mx-auto my-2 text-[16px] text-red-500">
        {errors.stack?.message as string}
      </span>
    </form>
  );
};

export default SubMenu;
