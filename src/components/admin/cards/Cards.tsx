'use client';

import {
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import type { ICard } from '@/types/cards';

import { deleteCard, getCards } from '@/api/cards';
import PlusIcon from '@/components/shared/icons/Admin-icons/PlusIcon';
import { constants } from '@/constants';

import Loader from '../../shared/loader/Loader';
import QuestionAlert from '../alerts/QuestionAlert';
import PageTitle from '../ui/PageTitle';

function Cards() {
  const queryClient = useQueryClient();
  const [isDeleting, setIsDeleting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentId, setCurrentId] = useState('');

  const { data, isFetching } = useQuery<ICard[], Error>({
    queryKey: [constants.cards.GET_CARDS],
    queryFn: getCards,
  });

  const deleteMutation = useMutation({
    mutationKey: [constants.cards.DELETE_CARD],
    mutationFn: (id: string) => deleteCard(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [constants.cards.GET_CARDS],
      });
      setIsLoading(false);
    },
    onError: (error) => {
      alert(error);
    },
  });

  const handleDelete = async () => {
    setIsDeleting(false);
    setIsLoading(true);
    try {
      await deleteMutation.mutateAsync(currentId);
    }
    catch (error) {
      console.log(error);
    }
  };

  const handleAmount = () => {
    alert(
      'Максимальна кількість карток для відображення на головній сторінці це 6',
    );
  };

  return (
    <div className="relative p-[24px]">
      <PageTitle title="Топ учасникі"></PageTitle>
      <div className="mx-auto mt-[80px] flex w-full flex-wrap gap-4">
        <div
          className="relative flex min-w-[218px] rounded-md border border-[#7EFE92] bg-[#2C2C2C] p-6 text-white"
        >
          <div
            className="flex w-full flex-col items-center justify-center"
          >
            {(data?.length as number) < 6
              ? (
                  <Link
                    href="/admin/cards/add"
                    className="flex flex-col items-center"
                  >
                    <PlusIcon />
                  </Link>
                )
              : (
                  <button
                    onClick={handleAmount}
                    className="flex flex-col items-center"
                  >
                    <PlusIcon />
                  </button>
                )}
          </div>
        </div>
        {data
        && Array.isArray(data)
        && data.map(card => (
          <div
            key={card.id}
            className="relative flex min-w-[218px] rounded-md border border-[#7EFE92] bg-[#2C2C2C] p-6 text-white"
          >
            <div
              className="flex w-full flex-col items-center justify-center"
            >
              <Image
                src={card.image_url}
                alt={card.name}
                width={117}
                height={117}
                className="aspect-square rounded-full object-cover text-center"
              />
              <span className="flex-col pb-2 text-lg font-bold">
                {card.name}
              </span>
              <span className="flex-col text-lg">
                {card.specialization}
              </span>
            </div>
            <div className="absolute right-[5px] top-[5px] z-10 flex gap-[12px]">
              <button
                onClick={() => {
                  setIsDeleting(true);
                  setCurrentId(card.id.toString());
                }}
                className="flex size-[32px] items-center justify-center bg-white"
              >
                <svg width={28} height={28}>
                  <use href="/Icons/sprite.svg#icon-drop"></use>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      {(isFetching || isLoading) && <Loader />}
      {isDeleting && (
        <QuestionAlert
          title="Ви впевнені, що хочете видалити учасника зі сторінки?"
          onCancel={() => setIsDeleting(false)}
          onConfirm={handleDelete}
        />
      )}
    </div>
  );
}

export default Cards;
