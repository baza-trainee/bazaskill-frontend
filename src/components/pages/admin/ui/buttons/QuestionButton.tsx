import type { ButtonHTMLAttributes } from 'react';

import { useRouter } from 'next/navigation';
import React from 'react';

import PrimaryButtonAdd from './PrimaryButtonAdd';
import SecondaryButton from './SecondaryButton';

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const QuestionButton: React.FC<ButtonProps> = ({
  text,
  ...props
}) => {
  const router = useRouter();
  return (
    <div className="h-[44px] w-[286px] rounded-md border border-white bg-[#939393] font-semibold  hover:bg-[#4B4B4B]  disabled:cursor-not-allowed ">
      {text}
      <div className="flex gap-6">
        <PrimaryButtonAdd text="Видалити" {...props} />
        <SecondaryButton
          text="Скасувати"
          onClick={() => router.refresh()}
        />
      </div>
    </div>
  );
};

export default QuestionButton;
