import UploadIcon from '@/components/icons/Admin-icons/UploadIcon';
import {
  DeepMap,
  FieldError,
  FieldErrors,
  FieldValues,
} from 'react-hook-form';

interface IFileInputProps {
  onChange: (files: FileList) => void;
  value: FileList;
  title: string;
  errors: string;
}

const FileInput: React.FC<IFileInputProps> = ({
  onChange,
  value,
  title,
  errors,
}) => {
  return (
    <div className="relative flex w-full max-w-[442px] grow flex-col gap-[5px]">
      <label htmlFor={title}>
        {title} &nbsp;
        <span className="text-red-500">*</span>
      </label>

      <div
        onClick={(e) => e.stopPropagation()}
        className="h-full w-full"
      >
        <input
          onChange={(e) =>
            onChange(e.target.files as FileList)
          }
          defaultValue=""
          accept=".pdf"
          type="file"
          className=" absolute bottom-0 left-0 h-full w-full cursor-pointer opacity-0"
        />
        <label className="box-border flex h-[44px] w-full cursor-pointer items-center justify-between truncate rounded-[4px] bg-white px-[16px] py-[6px] text-start leading-[26px] text-gray">
          {value && value[0]
            ? value[0]?.name
            : 'Завантажте'}
          <UploadIcon />
        </label>
        <span className="font-sans text-[12px] text-error">
          {errors}
        </span>
      </div>
    </div>
  );
};

export default FileInput;
