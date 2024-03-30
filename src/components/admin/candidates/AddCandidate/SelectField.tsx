//type declaration for future fetching
// | Array<Record<"id" | "title", number | string>> | undefined
interface ISelectFieldProps {
  title: string;
  value: string;
  values: string[];
  onChange: (value: string) => void;
  disableHandler?: (value: string) => boolean;
  errors: string;
  placeholder?: string;
}
const SelectField: React.FC<ISelectFieldProps> = ({
  title,
  value,
  values,
  onChange,
  disableHandler,
  errors,
  placeholder,
}) => {
  const handleDiasabled = (value: string): boolean => {
    if (disableHandler) {
      return disableHandler(value);
    }
    return false;
  };

  return (
    <div className="flex w-full max-w-[442px] grow flex-col gap-[5px]">
      <label htmlFor="phone">
        {title} &nbsp;
        <span className="text-red-500">*</span>
      </label>
      <select
        value={value}
        className="box-border h-[44px] rounded-[4px] px-[16px] py-[6px] text-black outline-none"
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">
          {placeholder || 'Please Select'}
        </option>
        {values.map((el, index) => (
          <option
            disabled={handleDiasabled(el)}
            key={index}
            value={el}
          >
            {el}
          </option>
        ))}
      </select>
      <span className="font-sans text-[12px] text-error">
        {errors}
      </span>
    </div>
  );
};

export default SelectField;
