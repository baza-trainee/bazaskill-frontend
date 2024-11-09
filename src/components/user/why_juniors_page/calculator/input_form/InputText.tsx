import { useField } from "formik";

interface InputTextProps {
  name: string;
  type?: string;
}

export default function InputText({ ...props }: InputTextProps) {
  const [field] = useField(props);
  return (
    <div className="grid grid-cols-1 grid-rows-auto list-none pl-[36px]">
      <input
        {...field}
        {...props}
        className="grid grid-cols-1 grid-rows-[40px] text-white font-roboto text-[16px] font-normal leading-[1.5] text-left uppercase border border-[#A9D08E] rounded-[4px] bg-[rgba(143,143,143,0.15)] outline-none px-[40px] py-[8px]"
      />
    </div>
  );
}
