const CustomCheckbox = ({ title }: { title: string }) => {
  return (
    <div className="relative flex items-center gap-[12px]">
      {/* className="peer z-[1] h-[20px] w-[20px] shrink-0 cursor-pointer appearance-none bg-white rounded-[4px] border-[1px] border-white" */}
      <input
        value={title}
        name="stack"
        type="checkbox"
        id={title}
        className="peer z-[1] h-[20px] w-[20px] shrink-0 cursor-pointer appearance-none rounded-[4px] border-[1px] border-secondaryGray bg-white"
      />
      {/* for input like in header */}
      {/* className="peer z-30 h-[20px] w-[20px] shrink-0 cursor-pointer appearance-none  rounded-[4px] border-[1px] border-white" */}
      <label
        htmlFor={title}
        className="z-[1] font-sans text-[16px] leading-[26px] text-white peer-checked:text-yellow"
      >
        {title}
      </label>
      {/* for input like in header */}
      {/* className="pointer-events-none absolute left-0 z-[1] hidden h-[20px] w-[20px] text-white peer-checked:block" */}
      <svg
        className="pointer-events-none absolute left-0 z-[1] hidden h-[20px] w-[20px] text-black peer-checked:block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
  );
};

export default CustomCheckbox;
