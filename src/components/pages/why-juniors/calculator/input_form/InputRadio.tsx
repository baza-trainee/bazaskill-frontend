import { useField } from 'formik';

interface InputRadioProps {
  name: string;
  value: string;
  type: string;
  children: React.ReactNode;
}

export default function InputRadio({ children, ...props }: InputRadioProps) {
  const [field] = useField({ ...props, type: 'radio' });
  const state = field.checked;

  return (
    <li className="grid grid-cols-[1fr_auto] grid-rows-[40px] items-center p-0">
      <label
        htmlFor={props.name}
        className={`font-roboto grid grid-cols-[20px_1fr] grid-rows-[24px] items-center gap-5 
          text-left text-[16px] font-normal leading-[1.5] 
          ${state ? 'text-[#4dc760]' : 'text-[#fefffe]'}`}
      >
        <img
          src="/Icons/point2.svg"
          alt="icon point"
          className="h-[24px] w-[20px] p-0"
        />
        {children}
      </label>
      <input
        {...field}
        {...props}
        className={`grid cursor-pointer appearance-none grid-cols-[24px] 
        
         grid-rows-[24px] 
        bg-contain bg-center transition-all duration-200 
        ${state ? "bg-[url('/Icons/radio_gr.svg')]" : "bg-[url('/Icons/radio_wh.svg')]"}`}
      />
    </li>
  );
}
