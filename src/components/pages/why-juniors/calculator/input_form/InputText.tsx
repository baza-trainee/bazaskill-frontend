import { useField } from 'formik';

interface InputTextProps {
  name: string;
  type?: string;
}

export default function InputText({ ...props }: InputTextProps) {
  const [field] = useField(props);
  return (
    <div className="grid-rows-auto grid list-none grid-cols-1 pl-[36px]">
      <input
        {...field}
        {...props}
        className="font-roboto grid grid-cols-1 grid-rows-[40px] rounded-[4px] border 
        border-[#A9D08E] bg-[rgba(143,143,143,0.15)] px-[40px] 
        py-[8px] text-left text-[16px] font-normal uppercase leading-[1.5] 
        text-white outline-none"
      />
    </div>
  );
}
