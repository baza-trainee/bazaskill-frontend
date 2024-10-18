'use client';

import { UploadIcon } from 'lucide-react';
import React, { forwardRef, useEffect, useState } from 'react';
import { type FieldValues, useController, type UseControllerProps } from 'react-hook-form';

type FileInputDocProps<T extends FieldValues> =
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name' | 'type'> &
  UseControllerProps<T> & {
    title?: string;
    isRequired?: boolean;
    accept?: string;
  };

function FileInputDoc<T extends FieldValues>({
  title,
  placeholder,
  control,
  name,
  rules,
  isRequired = false,
  accept,
  ...rest
}: FileInputDocProps<T>, ref: React.Ref<HTMLInputElement>) {
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);

  const {
    field,
    fieldState: { error },
  } = useController<T>({
    name,
    control,
    rules,
  });

  useEffect(() => {
    if (field.value && typeof field.value === 'object' && 'length' in field.value && field.value.length > 0) {
      setSelectedFileName(field.value[0].name);
    }
    else {
      setSelectedFileName(null);
    }
  }, [field.value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      field.onChange(files);
    }
  };

  const handlePlaceholderClick = () => {
    if (ref && 'current' in ref && ref.current) {
      ref.current.click();
    }
  };

  return (
    <div className="font-sans font-normal tracking-normal">
      {title && (
        <label
          htmlFor={name}
          className="mb-2 block text-lg leading-tight text-white"
        >
          {title}
          {isRequired && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}
      <div
        className={`bg-gray-100 hover:bg-green-50 focus-within:bg-gray-100 focus-within:border-green-500 relative h-11 w-full max-w-[286px] rounded-md transition-colors focus-within:border ${
          error ? 'border border-red-500' : ''
        }`}
        onClick={handlePlaceholderClick}
      >
        <span className="text-gray-500 pointer-events-none absolute inset-y-0 left-4 flex items-center truncate pr-8">
          {selectedFileName || placeholder}
        </span>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex w-11 items-center justify-center rounded-r-md bg-white">
          <UploadIcon className="text-gray-400 size-5" />
        </div>
        <input
          {...rest}
          {...field}
          type="file"
          id={name}
          ref={ref}
          accept={accept}
          className="sr-only"
          onChange={handleChange}
          aria-invalid={!!error}
          aria-describedby={`${name}-error`}
        />
      </div>
      {error && (
        <span id={`${name}-error`} className="mt-1 text-xs text-red-500">
          {error.message}
        </span>
      )}
    </div>
  );
}

export default forwardRef(FileInputDoc) as <T extends FieldValues>(
  props: FileInputDocProps<T> & { ref?: React.Ref<HTMLInputElement> }
) => React.ReactElement;
