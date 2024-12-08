import { forwardRef, InputHTMLAttributes } from 'react';

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const InputText = forwardRef<HTMLInputElement, InputTextProps>(({ error, ...props }, ref) => {
  return (
    <div className="grid-rows-auto grid list-none grid-cols-1 pl-[36px]">
      <input
        ref={ref}
        type="text"
        {...props}
        className="font-roboto grid grid-cols-1 grid-rows-[40px] rounded-[4px] border 
          border-[#A9D08E] bg-[rgba(143,143,143,0.15)] px-[40px] 
          py-[8px] text-left text-[16px] font-normal uppercase leading-[1.5] 
          text-white outline-none"
      />
      {error && <span className="mt-1 text-sm text-red-500">{error}</span>}
    </div>
  );
});

InputText.displayName = 'InputText';

export default InputText;
