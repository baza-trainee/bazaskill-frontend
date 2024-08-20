import {
  FieldValues,
  UseFormRegister,
} from 'react-hook-form';
type CustomCheckboxProps = {
  title: string;
  register: UseFormRegister<FieldValues>;
  registerFor: string;
  value?: string | number;
};
const CustomCheckbox = ({
  title,
  register,
  registerFor,
  value,
}: CustomCheckboxProps) => {
  return (
    <div className="relative flex items-center gap-[12px] text-sm">
      <input
        {...register(registerFor)}
        value={value}
        name={registerFor}
        type="checkbox"
        id={title}
        className="peer z-[1] h-[20px] w-[20px] shrink-0 cursor-pointer appearance-none rounded-[4px] border-[1px] border-secondaryGray bg-white"
      />
      <label
        htmlFor={title}
        className="z-[1] font-sans text-white peer-checked:text-yellow 3xl:text-xl"
      >
        {title}
      </label>
      <svg
        className="pointer-events-none absolute left-0 z-[1] hidden h-[20px] w-[20px] text-black peer-checked:block"
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

export default CustomCheckbox;
