import styles from './Icon.module.css';

const ArrowUpIcon = () => {
  return (
    <svg viewBox="0 0 16 9" xmlns="http://www.w3.org/2000/svg">
      <path
        className="hover:stroke-green-500 focus:stroke-green-500 h-6 w-6 cursor-pointer stroke-white transition-colors duration-200"
        d="M14.75 8L8 1.25L1.25 8"
        stroke="#FEFFFE"
      />
    </svg>
  );
};

export default ArrowUpIcon;
