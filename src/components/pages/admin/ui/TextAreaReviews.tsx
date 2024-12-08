'use client';

import type { ForwardedRef, InputHTMLAttributes } from 'react';
import { forwardRef } from 'react';

import WriteIcon from '@/components/shared/icons/Admin-icons/WriteIcon';

interface TextAreaReviewsProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  title?: string;
  errorText?: string;
  iconComponent?: JSX.Element;
  isRequired?: boolean;
}

const TextAreaReviews = forwardRef(
  (
    { title, errorText, value = '', isRequired, ...rest }: TextAreaReviewsProps,
    _ref: ForwardedRef<HTMLInputElement>
  ) => {
    const inputClassName = `bg-[#efefef] mt-[8px] 2xl:w-[290px] 3xl:w-[320px] w-[240px] 4xl:w-[350px] 5xl:w-[442px] h-[200px] text-[#020202] text-[16px]  font-sans font-normal leading-[1.6] tracking-[0px] resize-none rounded-md border-4 py-[16px] pl-[16px] pr-[40px] placeholder:text-[#787878] placeholder:text-[16px] placeholder:leading-[1.16] hover:bg-[#ebfcee] 
${
  errorText
    ? '[border:1px_solid_#f92b2d]  focus:outline-none focus:[border:1px_solid_#f92b2d] '
    : 'border-none focus:outline-none focus:bg-[#efefef] focus:[border:1px_solid_#35db4f]'
}


`;

    return (
      <div
        className={` w-[240px] font-sans font-normal 2xl:w-[290px] 3xl:w-[320px] 4xl:w-[350px] 5xl:w-[442px] ${errorText ? 'text-red-500' : 'text-inherit'}`}
      >
        {!!title && (
          <label htmlFor={title} className="mb-[8px]  block text-[20px] leading-[1.4]  text-white">
            {title}
            {isRequired && <span className="text-error">*</span>}
          </label>
        )}
        <div className="relative ">
          <textarea {...rest} id={title} value={value} className={inputClassName} />

          <div className="absolute right-[16px] top-[24px]">
            <WriteIcon className="size-[24px] fill-black" />
          </div>
        </div>
        {errorText && <span className="left top absolute ml-2 text-xs">{errorText}</span>}
      </div>
    );
  }
);

TextAreaReviews.displayName = 'TextAreaReviews';

export default TextAreaReviews;
