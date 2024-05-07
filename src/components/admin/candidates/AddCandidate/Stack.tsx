/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
'use client';

import { IStack } from '@/types/stack';
import {
  UseQueryResult,
  useQuery,
} from '@tanstack/react-query';
import { constants } from '@/constants';
import { getStack } from '@/api/stack';
import AddStackModal from '../AddStackModal/AddStackModal';
import React, {
  ChangeEvent,
  useEffect,
  useState,
} from 'react';
import { useModal } from '@/stores/useModal';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';

type Stack = {
  id: string;
  title: string;
  isExist: boolean;
};

interface IStackProps {
  isSubmitted?: boolean;
  handleStack: (stack: Stack[]) => void;
  error: string;
}

const Stack: React.FC<IStackProps> = ({
  handleStack,
  isSubmitted,
  error,
}) => {
  const [stack, setStack] = useState<Stack[]>([]);

  const isModalOpen = useModal(
    (state) => state.isModalOpen
  );
  const modalType = useModal((state) => state.modalType);
  const { openModal } = useModal();

  useBodyScrollLock(isModalOpen);

  const stackResponse: UseQueryResult<IStack[], Error> =
    useQuery({
      queryKey: [constants.stack.GET_STACK],
      queryFn: getStack,
    });

  const stackNames = stackResponse?.data?.map((item) =>
    item.title.toLowerCase()
  );

  const getId = (title: string) => {
    const foundedItem = stackResponse.data?.find(
      (item) =>
        item.title.toLowerCase() === title.toLowerCase()
    );
    return foundedItem?.id.toString();
  };

  const [input, setInput] = useState<string>('');

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setStack([
        ...stack,
        {
          id: getId(input) as string,
          title: input,
          isExist: stackNames!.includes(
            input.toLowerCase()
          ),
        },
      ]);
      setInput('');
    }
  };

  const handleDeleteStack = (id: number) => {
    setStack(stack.filter((_, index) => index !== id));
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [input]);

  useEffect(() => {
    handleStack(stack);
  }, [stack]);

  console.log(input);

  return (
    <div className="relative flex w-full gap-[24px]">
      <div className="grow-2 flex w-full max-w-[908px] flex-col gap-[5px]">
        <label htmlFor="about">
          Стек <span className="text-red-500">*</span>
        </label>
        <div
          id="about"
          className="flex h-auto min-h-[132px] min-w-full flex-wrap gap-[8px] rounded-[4px] bg-white px-[16px] py-[20px] text-black"
        >
          {stack.map(({ title, isExist }: Stack, index) => (
            <StackItem
              key={index}
              index={index}
              title={title}
              isExist={isExist}
              handleDelete={handleDeleteStack}
            />
          ))}
          <input
            id="stack_field"
            type="text"
            name="stack"
            placeholder="Пишіть тут"
            value={input}
            onChange={({
              target: { value },
            }: ChangeEvent<HTMLInputElement>) =>
              setInput(value)
            }
            className="box-border h-[44px] rounded-[4px] px-[16px] py-[6px] text-black outline-none"
          />
        </div>
        <div className="flex w-full rounded-[4px] border-[1px] border-white p-[16px]">
          <div className="flex grow flex-wrap gap-[6px]">
            {stack
              .filter(
                ({ title, isExist }: Stack) => !isExist
              )
              .map(({ title, isExist }: Stack, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center rounded-full border-[1px] border-white px-[16px] py-[5px]"
                >
                  {title}
                </div>
              ))}
          </div>

          <div
            onClick={() => openModal('add_stack')}
            className="flex min-w-[155px] cursor-pointer items-end justify-end self-end text-[16px] leading-[36px]"
          >
            + &nbsp;{' '}
            <span className="underline">
              Створити новий
            </span>
          </div>
        </div>
        <p className="text-xs text-error">{error}</p>
      </div>
      <div className="flex w-full max-w-[442px] shrink-[2] grow flex-col gap-[5px]"></div>
      {isModalOpen && modalType === 'add_stack' && (
        <AddStackModal />
      )}
    </div>
  );
};

type StackItemProps = {
  index: number;
  title: string;
  isExist: boolean;
  handleDelete: (index: number) => void;
};

const StackItem: React.FC<StackItemProps> = ({
  index,
  title,
  isExist,
  handleDelete,
}) => {
  return (
    <div
      className={`flex h-[36px] w-fit items-center gap-[16px] rounded-full border-[2px] bg-graphite px-[16px] py-[5px] font-sans text-[16px] text-white ${isExist ? 'border-green' : 'border-error'}`}
    >
      <span>{title}</span>
      <svg
        width={14}
        height={14}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => handleDelete(index)}
        className="cursor-pointer fill-[#787878] transition-all hover:fill-lightGray"
      >
        <path
          d="M14.6666 2.50065L13.4999 1.33398L7.99992 6.83398L2.49992 1.33398L1.33325 2.50065L6.83325 8.00065L1.33325 13.5007L2.49992 14.6673L7.99992 9.16732L13.4999 14.6673L14.6666 13.5007L9.16658 8.00065L14.6666 2.50065Z"
          fill="current"
        />
      </svg>
    </div>
  );
};

export default Stack;
