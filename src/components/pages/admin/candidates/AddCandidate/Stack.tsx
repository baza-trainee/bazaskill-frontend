'use client';

import type { ChangeEvent } from 'react';
import React, { useEffect, useState } from 'react';

import type { UseQueryResult } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';

import { getStack } from '@/api/stack';
import { constants } from '@/constants';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
import { useModal } from '@/stores/useModal';
import type { IStack } from '@/types/stack';

import AddStackModal from '../AddStackModal/AddStackModal';
import { StackItem } from './StackItem';

interface Stack {
  id: string;
  title: string;
  isExist: boolean;
}

interface IStackProps {
  isSubmitted?: boolean;
  handleStack: (stack: Stack[]) => void;
  error: string;
}

const StackComponent: React.FC<IStackProps> = ({ handleStack, error }) => {
  const [stack, setStack] = useState<Stack[]>([]);

  const isModalOpen = useModal((state) => state.isModalOpen);
  const modalType = useModal((state) => state.modalType);
  const { openModal } = useModal();

  useBodyScrollLock(isModalOpen);

  const stackResponse: UseQueryResult<IStack[], Error> = useQuery({
    queryKey: [constants.stack.GET_STACK],
    queryFn: getStack
  });

  const stackNames = stackResponse?.data?.map((item) =>
    item.title.toLowerCase()
  );

  const getId = (title: string) => {
    const foundedItem = stackResponse.data?.find(
      (item) => item.title.toLowerCase() === title.toLowerCase()
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
          isExist: stackNames!.includes(input.toLowerCase())
        }
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

  return (
    <div className="relative flex w-full gap-[24px]">
      <div className="grow-2 flex w-full max-w-[908px] flex-col gap-[5px]">
        <label htmlFor="stack">
          Стек <span className="text-red-500">*</span>
        </label>
        <div
          id="stack"
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
            onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
              setInput(value)
            }
            className="box-border h-[44px] rounded-[4px] px-[16px] py-[6px] text-black outline-none"
          />
        </div>
        <div className="flex w-full rounded-[4px] border border-white p-[16px]">
          <div className="flex grow flex-wrap gap-[6px]">
            {stack
              .filter(({ isExist }: Stack) => !isExist)
              .map(({ title }: Stack, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center rounded-full border border-white px-[16px] py-[5px]"
                >
                  {title}
                </div>
              ))}
          </div>

          <div
            onClick={() => openModal('add_stack')}
            className="flex min-w-[155px] cursor-pointer items-end justify-end self-end text-[16px] leading-[36px]"
          >
            + &nbsp; <span className="underline">Створити новий</span>
          </div>
        </div>
        <p className="text-xs text-error">{error}</p>
      </div>
      <div className="flex w-full max-w-[442px] shrink-[2] grow flex-col gap-[5px]"></div>
      {isModalOpen && modalType === 'add_stack' && <AddStackModal />}
    </div>
  );
};

export default StackComponent;
