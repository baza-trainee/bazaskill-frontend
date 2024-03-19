/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import UploadIcon from '@/components/icons/Admin-icons/UploadIcon';
import { ForwardedRef, forwardRef, useState } from 'react';

interface FileInputPostProps {
  title?: string;
  errorText?: string;
  iconComponent?: JSX.Element;
  isRequired?: boolean;
  placeholder: string;
  onChange: (_file: File) => void;
}

const FileInputPost = forwardRef(function FileInputPost(
  {
    title,
    errorText,
    placeholder,
    isRequired,
    onChange,
    ...rest
  }: FileInputPostProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  const [selectedFileName, setSelectedFileName] = useState<
    string | null
  >(null);
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState<
    string | null
  >(null);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
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

    if (file.size > 2 * 1024 * 1024) {
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

  const inputClassName = `overflow-hidden w-[240px] 2xl:w-[290px] 3xl:w-[320px] 4xl:w-[350px] 5xl:w-[442px] cursor-pointer relative z-1 bg-[#efefef] h-[44px] outline-none ${isValid ? 'border-1px-solid-transparent' : 'border-1px-solid-#f92b2d'} rounded-md px-[16px] py-[9px] pr-[40px] text-[#020202] text-[16px] hover:bg-[#ebfcee] focus:outline-none focus:bg-[#efefef]`;

  return (
    <div
      className={`font-sans font-normal tracking-[0px] ${errorText ? 'text-red-500' : 'text-inherit'}`}>
      {!!title && (
        <label
          htmlFor={title}
          className="mb-[8px] block text-[20px] leading-[1.4] text-white">
          {title}
          {isRequired && (
            <span className="text-error">*</span>
          )}
        </label>
      )}
      <div className={inputClassName}>
        <span className="text-[16px] leading-[1.16] text-[#787878]">
          {selectedFileName ? (
            <span className="text-[#020202]">
              {selectedFileName}
            </span>
          ) : (
            placeholder
          )}
        </span>
        <div className="absolute right-[16px] top-[9px] z-0">
          <UploadIcon />
        </div>
        <input
          {...rest}
          type="file"
          id={title}
          ref={ref}
          accept="image/jpg, image/png, image/svg, image/webp"
          className="absolute left-0 w-[100%] cursor-pointer overflow-hidden opacity-0"
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
});

FileInputPost.displayName = 'FileInputPost';

export default FileInputPost;
