interface StackItemProps {
  index: number;
  title: string;
  isExist: boolean;
  handleDelete: (index: number) => void;
}

export const StackItem: React.FC<StackItemProps> = ({
  index,
  title,
  isExist,
  handleDelete
}) => {
  return (
    <div
      className={`flex h-[36px] w-fit items-center gap-[16px] rounded-full border-2 bg-graphite px-[16px] py-[5px] font-sans text-[16px] text-white ${isExist ? 'border-green' : 'border-error'}`}
    >
      <span>{title}</span>
      <svg
        width={14}
        height={14}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => handleDelete(index)}
        className="cursor-pointer fill-secondaryGray transition-all hover:fill-lightGray"
      >
        <path
          d="M14.6666 2.50065L13.4999 1.33398L7.99992 6.83398L2.49992 1.33398L1.33325 2.50065L6.83325 8.00065L1.33325 13.5007L2.49992 14.6673L7.99992 9.16732L13.4999 14.6673L14.6666 13.5007L9.16658 8.00065L14.6666 2.50065Z"
          fill="current"
        />
      </svg>
    </div>
  );
};
