import { nanoid } from 'nanoid';
import {
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
} from 'react';

interface TextAreaArticleProps
  extends InputHTMLAttributes<HTMLTextAreaElement> {
  title?: string;
  errorText?: string;
  isRequired?: boolean;
}

const TextAreaArticle = forwardRef(function TextAreaArticle(
  {
    title,
    errorText,
    value = '',
    isRequired,
    ...rest
  }: TextAreaArticleProps,
  _ref: ForwardedRef<HTMLInputElement>
) {
  const id = nanoid();

  const inputClassName = `bg-[#efefef] mt-[8px] w-[907px] h-[123px] text-[#020202] text-[16px]  font-sans font-normal leading-[1.6] tracking-[0px] resize-none rounded-md border-4 py-[16px] pl-[16px] pr-[40px] placeholder:text-[#787878] placeholder:text-[16px] placeholder:leading-[1.16]
hover:bg-[#ebfcee] 
${
  errorText
    ? '[border:1px_solid_#f92b2d]  focus:outline-none focus:[border:1px_solid_#f92b2d] '
    : 'border-none focus:outline-none focus:bg-[#efefef] focus:[border:1px_solid_#35db4f]'
}
`;

  return (
    <div
      className={`w-[907px] font-sans font-normal  ${errorText ? 'text-red-500' : 'text-inherit'}`}>
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
      <div className="relative  mt-[8px]  ">
        <textarea
          {...rest}
          id={id}
          value={value}
          className={inputClassName}
        />
      </div>
      {errorText && (
        <span className="ml-2 text-xs">{errorText}</span>
      )}
    </div>
  );
});

TextAreaArticle.displayName = 'TextAreaArticle';

export default TextAreaArticle;
