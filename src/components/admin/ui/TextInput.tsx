import { nanoid } from 'nanoid';
import {
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
} from 'react';

interface TextInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  errorText?: string;
  iconComponent?: JSX.Element;
  isRequired?: boolean;
}

const TextInput = forwardRef(function TextInput(
  {
    title,
    errorText,
    value = '',
    iconComponent,
    isRequired,
    ...rest
  }: TextInputProps,
  _ref: ForwardedRef<HTMLInputElement>
) {
  const id = nanoid();

  const inputClassName = `h-[44px] outline-none [border:1px_solid_transparent]  w-full rounded-md placeholder:text-[#787878] placeholder:text-[16px] placeholder:leading-[1.16] px-[16px] py-[9px] text-[#020202] text-[16px]
      ${
        errorText
          ? '[border:2px_solid_red] focus:[border:2px_solid_red]'
          : ' focus:[border:2px_solid_#35DB4F] '
      }
    `;

  return (
    <div
      className={` w-full min-w-[100px] max-w-[442px] font-['Open_Sans',_sans-serif] font-normal tracking-[0px] ${errorText ? 'text-red-500' : 'text-inherit'}`}>
      {!!title && (
        <label
          htmlFor={id}
          className=" mb-0  text-[20px] leading-[1.4]  text-white">
          {title}
          {isRequired && (
            <span className="text-error">*</span>
          )}
        </label>
      )}
      <div className="relative mt-[8px] ">
        <input
          {...rest}
          id={id}
          value={value}
          className={inputClassName}
        />
        {iconComponent && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 transform">
            {iconComponent}
          </div>
        )}
      </div>

      {errorText && (
        <span className="text-xs">{errorText}</span>
      )}
    </div>
  );
});

TextInput.displayName = 'TextInput';

export default TextInput;
