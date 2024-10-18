'use client';

import {
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import Link from 'next/link';
import React, { useState } from 'react';

import {
  deleteSpecialization,
  getSpecializations,
} from '@/api/specialization';
import PlusIcon from '@/components/shared/icons/Admin-icons/PlusIcon';
import { constants } from '@/constants';

import Loader from '../../shared/loader/Loader';
import QuestionAlert from '../alerts/QuestionAlert';
import PageTitle from '../ui/PageTitle';

function Specializations() {
  const queryClient = useQueryClient();
  const [isDeleting, setIsDeleting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentId, setCurrentId] = useState('');

  const { data, isFetching } = useQuery({
    queryKey: [
      constants.specialization.FETCH_SPECIALIZATIONS,
    ],
    queryFn: getSpecializations,
  });

  const deleteMutation = useMutation({
    mutationKey: [
      constants.specialization.DELETE_SPECIALIZATION,
    ],
    mutationFn: (id: string) => deleteSpecialization(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [
          constants.specialization.FETCH_SPECIALIZATIONS,
        ],
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

  return (
    <div className="relative pl-[24px] pt-[20px]">
      <PageTitle title="Спеціалізації" />
      <section className="flex flex-col flex-wrap gap-[24px] gap-y-12 pt-[50px] md:flex-row">
        <div className="flex h-[236px] w-[242px] flex-col items-center justify-center rounded-[10px] border-2 border-[#7EFE92] md:w-[117px] xl:w-[258px] 5xl:h-[236px] 5xl:w-[364px]">
          <Link
            href="/admin/specializations/add"
            className="flex flex-col items-center"
          >
            <PlusIcon />
            <p className="font-sans text-[20px] leading-[1.3] text-[#4DC760]">
              Додати спеціалізацію
            </p>
          </Link>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {data
          && Array.isArray(data)
          && data?.map(item => (
            <div
              className="relative flex h-[236px] w-[242px] flex-col items-center justify-center rounded-[10px] border-2 border-[#7EFE92] md:w-[117px] xl:w-[258px] 5xl:h-[236px] 5xl:w-[364px]"
              key={item.id}
            >
              <p className="font-sans text-[20px] leading-[1.3] text-white">
                {item.title}
              </p>
              <div className="absolute bottom-[12px] right-[12px] z-10 flex gap-[32px]">
                <button
                  onClick={() => {
                    setIsDeleting(true);
                    setCurrentId(item.id.toString());
                  }}
                  className="flex size-[32px] items-center justify-center bg-white"
                >
                  <svg width={28} height={28}>
                    <use href="/Icons/sprite.svg#icon-drop"></use>
                  </svg>
                </button>
                <button className="flex size-[32px] items-center justify-center bg-white">
                  <Link
                    href={`/admin/specializations/edit/${item.id}`}
                  >
                    <svg width={28} height={28}>
                      <use href="/Icons/sprite.svg#icon-pen"></use>
                    </svg>
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      {(isFetching || isLoading) && <Loader />}
      {isDeleting && (
        <QuestionAlert
          title="Ви впевнені, що хочете видалити спеціалізацію зі сторінки?"
          onCancel={() => setIsDeleting(false)}
          onConfirm={handleDelete}
        />
      )}
    </div>
  );
}

export default Specializations;
