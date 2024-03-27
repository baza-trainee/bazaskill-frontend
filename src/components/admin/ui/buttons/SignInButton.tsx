import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const SignInButton: React.FC<ButtonProps> = ({
  text,
  ...props
}) => {
  return (
    <button
      {...props}
      className="h-[44px] w-[358px] rounded-md border bg-white font-['Open_Sans',_sans-serif] text-[16px] font-semibold text-black [border:2px_solid_#020202] hover:bg-[#4B4B4B] hover:text-white active:bg-black disabled:cursor-not-allowed disabled:bg-[#939393] disabled:text-white">
      {text}
    </button>
  );
};

export default SignInButton;
