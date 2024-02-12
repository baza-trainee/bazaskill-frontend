import React, {
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
} from 'react';
import { v4 as uuidv4 } from 'uuid';

interface CustomCheckboxProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value'
  > {
  title?: string;
  isRequired?: boolean;
  checked?: boolean | undefined;
  errorText?: string;
}

const CustomCheckbox = forwardRef(function CustomCheckbox(
  {
    title,
    isRequired,
    errorText,
    checked,
    ...rest
  }: CustomCheckboxProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  const checkboxId = uuidv4();
  return (
    <>
      <div className="relative ml-2 flex h-[50px] w-[359px] items-center">
        <input
          {...rest}
          checked={checked}
          name=""
          type="checkbox"
          id={checkboxId}
          ref={ref}
          className="peer h-[24px] w-[24px] shrink-0 cursor-pointer appearance-none rounded-[2px] border-[1px] border-gray"
        />
        <label
          htmlFor={checkboxId}
          className="ml-2 max-w-[359px] cursor-pointer font-sans text-[15px] after:absolute after:left-1 after:top-1 after:z-[-1] after:h-full  after:cursor-pointer"
        >
          {title}
          {isRequired && (
            <span className="ml-1 text-error">*</span>
          )}
        </label>
        <svg
          className="pointer-events-none absolute hidden h-[24px] w-[24px] text-gray peer-checked:block"
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
      {errorText && (
        <span className="ml-2 text-xs text-error">
          {errorText}
        </span>
      )}
    </>
  );
});

export default CustomCheckbox;
