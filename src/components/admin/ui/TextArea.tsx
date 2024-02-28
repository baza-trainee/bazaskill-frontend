import { nanoid } from 'nanoid';
import {
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
} from 'react';

interface TextAreaProps
  extends InputHTMLAttributes<HTMLTextAreaElement> {
  title?: string;
  errorText?: string;
  iconComponent?: JSX.Element;
  isRequired?: boolean;
}

const TextArea = forwardRef(function TextArea(
  {
    title,
    errorText,
    value = '',
    iconComponent,
    isRequired,
    ...rest
  }: TextAreaProps,
  _ref: ForwardedRef<HTMLInputElement>
) {
  const id = nanoid();

  const inputClassName = `mt-[8px] w-[442px] h-[200px] text-[#020202] text-[16px]  font-sans font-normal leading-[1.6] tracking-[0px] resize-none rounded-md border-4 p-[16px] placeholder:text-[#787878] placeholder:text-[16px] placeholder:leading-[1.16]
${
  errorText
    ? 'border-red-500  outline-red-500 focus:outline-red-500'
    : 'border-none focus:outline-none'
}
`;

  return (
    <div
      className={`w-[442px]  ${errorText ? 'text-red-500' : 'text-inherit'}`}>
      {!!title && (
        <label
          htmlFor={id}
          className="mb-0  text-[20px] leading-[1.4]  text-white">
          {title}
          {isRequired && (
            <span className="text-error">*</span>
          )}
        </label>
      )}
      <div className="relative mt-[8px] ">
        <textarea
          {...rest}
          id={id}
          value={value}
          className={inputClassName}
        />
        {iconComponent && (
          <div className="absolute right-[16px] top-[24px]">
            {iconComponent}
          </div>
        )}
      </div>

      {errorText && (
        <span className="ml-2 text-xs">{errorText}</span>
      )}
    </div>
  );
});

TextArea.displayName = 'TextArea';

export default TextArea;
