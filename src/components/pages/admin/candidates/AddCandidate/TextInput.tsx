import type { ForwardedRef, InputHTMLAttributes } from 'react';
import { forwardRef } from 'react';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  error: string;
  isRequired: boolean;
}
const TextInput = forwardRef(
  (
    { error, isRequired, placeholder, title, ...rest }: TextInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className="flex w-full max-w-[442px] grow flex-col gap-[5px]">
        <label htmlFor={title}>
          {title} &nbsp;
          <span className="text-red-500">{isRequired && '*'}</span>
        </label>
        <input
          {...rest}
          ref={ref}
          id={title}
          placeholder={placeholder}
          className="box-border h-[44px] rounded-[4px] px-[16px] py-[6px] text-black outline-none"
        />
        <span className="font-sans text-[12px] text-error">{error}</span>
      </div>
    );
  }
);

TextInput.displayName = 'TextInput';

export default TextInput;
