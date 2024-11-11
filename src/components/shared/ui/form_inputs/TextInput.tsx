import type {
  ForwardedRef,
  InputHTMLAttributes,
} from 'react';

import {
  forwardRef,
} from 'react';

interface TextInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  isRequired?: boolean;
  errorText?: string;
}

const TextInput = forwardRef((
  {
    title,
    errorText,
    isRequired,
    value = '',
    ...rest
  }: TextInputProps,
  _ref: ForwardedRef<HTMLInputElement>,
) => {
  console.log(errorText);
  return (
    <div className="relative m-2 w-[240px] sm:w-[340px] md:w-[264px] xl:w-[358px]">
      {!!title && (
        <label htmlFor={title}>
          {title}
          {isRequired && (
            <span className="text-error">*</span>
          )}
        </label>
      )}
      <input
        {...rest}
        id={title}
        value={value}
        className={`mt-[10px] w-full rounded-sm bg-inputBgGray p-2 outline-none focus:border focus:border-green 
        ${errorText && 'border border-error focus:border-error'}
        ${value && !errorText && 'border border-green'}
        `}
      />

      {errorText && (
        <span className="text-xs text-error">
          {errorText}
        </span>
      )}
    </div>
  );
});

TextInput.displayName = 'TextInput';

export default TextInput;
