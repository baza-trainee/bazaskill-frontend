/* eslint-disable no-unused-vars */
'use client';
import UploadIcon from '@/components/shared/icons/Admin-icons/UploadIcon';
import { ForwardedRef, forwardRef, useState } from 'react';

interface FileInputPartnerProps {
  title?: string;
  errorText?: string;
  isRequired?: boolean;
  placeholder: string;
  onChange: (file: File) => void;
}

const FileInputPartner = forwardRef(
  function FileInputPartner(
    {
      title,
      errorText,
      placeholder,
      isRequired,
      onChange,
      ...rest
    }: FileInputPartnerProps,
    ref: ForwardedRef<HTMLInputElement>
  ) {
    const [selectedFileName, setSelectedFileName] =
      useState<string | null>(null);

    const [errorMessage, setErrorMessage] = useState<
      string | null
    >(null);

    const [isValid, setIsValid] = useState(true);

    const handleChange = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      const files = event.target.files;
      if (files && files.length > 0) {
        const selectedFile = files[0];
        if (validateFile(selectedFile)) {
          setSelectedFileName(selectedFile.name);
          onChange(selectedFile);
          setErrorMessage(null);
        } else {
          setIsValid(false);
          setSelectedFileName(selectedFile.name);
        }
      }
    };

    const handlePlaceholderClick = () => {
      if (ref && 'current' in ref && ref.current) {
        ref.current.click();
      }
    };

    const validateFile = (file: File): boolean => {
      const validExtensions = [
        '.jpg',
        '.webp',
        '.png',
        '.svg',
      ];
      const extension = file.name
        .substring(file.name.lastIndexOf('.'))
        .toLowerCase();
      if (!validExtensions.includes(extension)) {
        setErrorMessage('Невалідний формат файлу');
        return false;
      }

      if (file.size > 1024 * 1024 * 2) {
        setErrorMessage(
          'Розмір файлу має бути не більш 2 Mb'
        );
        return false;
      }

      if (file.name.length > 30) {
        setErrorMessage(
          "Ім'я файлу не повинно перевищувати 30 символів"
        );
        return false;
      }

      return true;
    };

    const inputClassName = ` w-[597px]  cursor-pointer relative z-1  bg-[#efefef] h-[44px] outline-none [border:1px_solid_transparent] rounded-md    px-[16px] py-[9px] pr-[40px] text-[#020202] text-[16px]
    hover:bg-[#ebfcee] 
${
  errorText
    ? '[border:1px_solid_#f92b2d]  focus:outline-none focus:[border:1px_solid_#f92b2d] '
    : 'border-none focus:outline-none focus:bg-[#efefef] focus:[border:1px_solid_#35db4f]'
}
    `;

    return (
      <div
        className={` font-sans font-normal tracking-[0px] ${errorText ? 'text-red-500' : 'text-inherit'}`}
      >
        {!!title && (
          <label
            htmlFor={title}
            className=" mb-[8px]  block text-[20px]  leading-[1.4] text-white"
          >
            {title}
            {isRequired && (
              <span className="text-error">*</span>
            )}
          </label>
        )}
        <div
          className={inputClassName}
          onClick={handlePlaceholderClick}
        >
          <span className="text-[16px] leading-[1.16] text-[#787878]">
            {selectedFileName ? (
              <span className="text-[#020202]">
                {selectedFileName}
              </span>
            ) : (
              placeholder
            )}
          </span>
          <div className=" absolute right-[16px] top-[9px] z-0 ">
            <UploadIcon />
          </div>
          <input
            {...rest}
            type="file"
            id={title}
            ref={ref}
            accept="image/jpeg, image/jpg, image/png,image/svg+xml "
            className=" absolute  left-0 w-[100%] cursor-pointer opacity-0"
            onChange={handleChange}
          />
        </div>
        {errorMessage && (
          <span className="left top absolute text-xs text-red-500">
            {errorMessage}
          </span>
        )}
      </div>
    );
  }
);

FileInputPartner.displayName = 'FileInputPartner';

export default FileInputPartner;
