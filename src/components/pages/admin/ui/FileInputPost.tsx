'use client';

import type { ForwardedRef } from 'react';
import { forwardRef, useEffect, useState } from 'react';

import UploadIcon from '@/components/shared/icons/Admin-icons/UploadIcon';

interface FileInputPostProps {
  title?: string;
  errorText?: string;
  iconComponent?: JSX.Element;
  isRequired?: boolean;
  placeholder: string;
  file?: any;
  onChange: (_file: File) => void;
}

const FileInputPost = forwardRef(
  (
    {
      title,
      errorText,
      placeholder,
      isRequired,
      onChange,
      file,
      ...rest
    }: FileInputPostProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const [selectedFileName, setSelectedFileName] = useState<string | null>(
      null
    );
    const [isValid, setIsValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const validateFile = (file: File): boolean => {
      const validExtensions = ['.jpg', '.jpeg', '.webp', '.png', '.svg'];
      const extension = file.name
        .substring(file.name.lastIndexOf('.'))
        .toLowerCase();
      if (!validExtensions.includes(extension)) {
        setErrorMessage('Невалідний формат файлу');
        return false;
      }

      if (file.size > 2 * 1024 * 1024) {
        setErrorMessage('Розмір файлу має бути не більш 2 Mb');
        return false;
      }

      return true;
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (files && files.length > 0) {
        const selectedFile = files[0];
        if (validateFile(selectedFile)) {
          setSelectedFileName(selectedFile.name);
          onChange(selectedFile);
          setIsValid(true);
          setErrorMessage(null);
        } else {
          setIsValid(false);
        }
      }
    };

    useEffect(() => {
      if (!file) return;
      setSelectedFileName(file.name);
    }, [file]);

    const inputClassName = `overflow-hidden w-[242px] 2xl:w-[290px] 3xl:w-[320px] 4xl:w-[442px] cursor-pointer relative z-1 bg-[#efefef] h-[44px] outline-none ${isValid ? 'border-1px-solid-transparent' : 'border-1px-solid-#f92b2d'} rounded-md px-[16px] py-[9px] pr-[40px] text-[#020202] text-[16px] hover:bg-[#ebfcee] focus:outline-none focus:bg-[#efefef]`;

    return (
      <div
        className={`font-sans font-normal tracking-normal ${errorText ? 'text-red-500' : 'text-inherit'}`}
      >
        {!!title && (
          <label
            htmlFor={title}
            className="mb-[8px] block text-[20px] leading-[1.4] text-white"
          >
            {title}
            {isRequired && <span className="text-error">*</span>}
          </label>
        )}
        <div className={inputClassName}>
          <span className="text-[16px] leading-[1.16] text-secondaryGray">
            <span className="absolute top-[50%] z-0 translate-y-[-50%] truncate text-[#020202]">
              {selectedFileName || placeholder}
            </span>
          </span>
          <div className="absolute right-0 top-0 z-0 flex h-full w-[2.5rem] items-center justify-center bg-white">
            <UploadIcon />
          </div>
          <input
            {...rest}
            type="file"
            id={title}
            ref={ref}
            accept="image*"
            className="absolute left-0 w-full cursor-pointer overflow-hidden opacity-0"
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

FileInputPost.displayName = 'FileInputPost';

export default FileInputPost;
