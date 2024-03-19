import React, {
  ButtonHTMLAttributes,
  ReactNode,
} from 'react';
import { useRouter } from 'next/navigation';
interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  iconClassName?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  iconClassName = '',
  ...rest
}) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push('/')}
      {...rest}
      className="bg-gray-700 mx-auto flex h-[44px] w-[240px] items-center justify-start rounded-md border-2 px-[30px] py-2 text-white hover:bg-black"
    >
      {children}
    </button>
  );
};

export default Button;
