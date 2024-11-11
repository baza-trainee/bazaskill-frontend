import UploadIcon from '@/components/shared/icons/Admin-icons/UploadIcon';

interface IFileInputProps {
  onChange: (files: FileList) => void;
  value: FileList;
  title: string;
  errors: string;
  isRequired?: boolean;
}

const FileInput: React.FC<IFileInputProps> = ({
  onChange,
  value,
  title,
  errors,
  isRequired,
}) => {
  return (
    <div className="relative flex w-full max-w-[442px] grow flex-col gap-[5px]">
      <label htmlFor={title}>
        {title}
        {' '}
&nbsp;
        {isRequired && (
          <span className="text-red-500">*</span>
        )}
      </label>

      <div
        onClick={e => e.stopPropagation()}
        className="size-full"
      >
        <input
          onChange={e =>
            onChange(e.target.files as FileList)}
          defaultValue=""
          accept=".pdf"
          type="file"
          className=" absolute bottom-0 left-0 size-full cursor-pointer opacity-0"
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
