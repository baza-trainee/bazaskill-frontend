import type { HTMLProps } from 'react';

interface IButtonLeft extends HTMLProps<HTMLDivElement> {}
const ButtonLeft: React.FC<IButtonLeft> = ({ className, ...rest }) => {
  return (
    <div className={`${className}`} {...rest}>
      <svg
        width="33"
        height="33"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10.4772727,0.477272727 C10.7408632,0.740863176 10.7408632,1.16822773 10.4772727,1.43181818 L1.90909091,10 L10.4772727,18.5681818 C10.7408632,18.8317723 10.7408632,19.2591368 10.4772727,19.5227273 C10.2136823,19.7863177 9.78631772,19.7863177 9.52272727,19.5227273 L0.707106781,10.7071068 C0.316582489,10.3165825 0.316582489,9.68341751 0.707106781,9.29289322 L9.52272727,0.477272727 C9.78631772,0.213682278 10.2136823,0.213682278 10.4772727,0.477272727 Z" />
      </svg>
    </div>
  );
};

export default ButtonLeft;
