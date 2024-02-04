import {
  UseFormRegister,
  FieldValues,
} from 'react-hook-form';

const CustomInput = ({
  title,
  register,
}: {
  title: string;
  register: UseFormRegister<FieldValues>;
}) => {
  return (
    <div className="relative flex h-[50px] w-full flex-row-reverse items-center justify-between border-b-[2px] border-b-[#4E4E4E] px-[20px] transition-all last:border-none hover:bg-[#2B2B2B]">
      <input
        {...register('stack')}
        value={title}
        name="stack"
        type="checkbox"
        id={title}
        className="peer z-30 h-[20px] w-[20px] shrink-0 cursor-pointer appearance-none rounded-[4px] border-[1px] border-white"
      />
      <label
        htmlFor={title}
        className="z-[1] font-sans text-[16px] tracking-[2%] text-white after:absolute after:left-0 after:top-0 after:z-[-1] after:h-full after:w-full after:cursor-pointer peer-checked:text-yellow peer-checked:after:bg-[#2B2B2B]"
      >
        {title}
      </label>
      <svg
        className="pointer-events-none absolute right-[20px] z-[1] hidden h-[20px] w-[20px] text-white peer-checked:block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
  );
};

export default CustomInput;
