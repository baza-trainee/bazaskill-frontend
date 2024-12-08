'use client';

import type { ForwardedRef, InputHTMLAttributes } from 'react';
import { forwardRef } from 'react';

import WriteIcon from '@/components/shared/icons/Admin-icons/WriteIcon';

interface TextAreaCandidateProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  title?: string;
  errorText?: string;
  iconComponent?: JSX.Element;
  isRequired?: boolean;
}

const TextAreaCandidate = forwardRef(
  (
    { title, errorText, value = '', isRequired, ...rest }: TextAreaCandidateProps,
    _ref: ForwardedRef<HTMLInputElement>
  ) => {
    const inputClassName = `bg-[#efefef] mt-[8px] w-[520px] 5xl:w-[908px] h-[123px] text-[#020202] text-[16px]  font-sans font-normal leading-[1.6] tracking-[0px] resize-none rounded-md border-4 py-[16px] pl-[16px] pr-[48px] placeholder:text-[#787878] placeholder:text-[16px] placeholder:leading-[1.16]
hover:bg-[#ebfcee] 
${
  errorText
    ? '[border:1px_solid_#f92b2d]  focus:outline-none focus:[border:1px_solid_#f92b2d] '
    : 'border-none focus:outline-none focus:bg-[#efefef] focus:[border:1px_solid_#35db4f]'
}
`;

    return (
      <div
        className={`w-[520px] font-sans font-normal 5xl:w-[908px]  ${errorText ? 'text-red-500' : 'text-inherit'}`}
      >
        {!!title && (
          <label
            htmlFor={title}
            className="mb-[8px]  block  text-[20px] font-bold  leading-[1.4] text-white"
          >
            {title}
            {isRequired && <span className="text-error">*</span>}
          </label>
        )}
        <div className="relative ">
          <textarea {...rest} id={title} value={value} className={inputClassName} />

          <div className="absolute right-[16px] top-[24px]">
            <WriteIcon />
          </div>
        </div>

        {errorText && <span className="left top absolute ml-2 text-xs">{errorText}</span>}
      </div>
    );
  }
);

TextAreaCandidate.displayName = 'TextAreaCandidate';

export default TextAreaCandidate;
