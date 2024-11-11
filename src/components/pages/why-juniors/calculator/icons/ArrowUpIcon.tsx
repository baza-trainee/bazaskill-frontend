import styles from "./Icon.module.css";

const ArrowUpIcon = () => {
  return (
    <svg viewBox="0 0 16 9" xmlns="http://www.w3.org/2000/svg">
      <path
        className="w-6 h-6 stroke-white transition-colors duration-200 cursor-pointer hover:stroke-green-500 focus:stroke-green-500"
        d="M14.75 8L8 1.25L1.25 8"
        stroke="#FEFFFE"
      />
    </svg>
  );
};

export default ArrowUpIcon;
