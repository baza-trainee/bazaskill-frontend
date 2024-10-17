'use client';

import React from 'react';
import Link from 'next/link';
import { dateChecker } from '@/helpers/dateChecker';
import { useQuery } from '@tanstack/react-query';
import {
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { constants } from '@/constants';
import {
  getHrApplications,
  deleteApplication,
} from '@/api/hr_application';
import PageTitle from '../ui/PageTitle';
import TrashIcon from '@/components/shared/icons/Admin-icons/TrashIcon';
import Loader from '../../shared/loader/Loader';

const HrApplications = () => {
  const queryClient = useQueryClient();

  const { data, isFetching, isError, error } = useQuery({
    queryKey: [constants.hr_applications.FETCH_HRS],
    queryFn: getHrApplications,
  });

  const deleteApplicationMutation = useMutation({
    mutationFn: deleteApplication,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [constants.hr_applications.FETCH_HRS],
      });
    },
  });

  const handleRemove = (id: number) => {
    if (confirm('Ви дійсно хочете видалити заявку?')) {
      deleteApplicationMutation.mutate(id);
    }
  };

  if (isError) return <p>{`Error: ${error.message}`}</p>;

  return (
    <div className="relative h-[100vh] max-h-[100vh] p-[24px]">
      <PageTitle title="Заявки HR`ів" />
      <ul className="mt-5 flex flex-col">
        {data && Array.isArray(data) && data.length ? (
          data.map((item) => (
            <li
              key={item.id}
              className={`flex h-16 items-center gap-[150px] border-b px-4 ${dateChecker(item.created_at) ? 'border-green' : 'border-gray'}`}
            >
              <div className="flex w-[40%] justify-between">
                <Link
                  href={`/admin/hr-applications/${item.id}`}
                >
                  <div className="flex cursor-pointer gap-[5px] hover:text-green">
                    <span>{item.first_name}</span>
                    <span>{item.last_name}</span>
                  </div>
                </Link>
                <span className="text-right">
                  {item.created_at.toString().slice(0, 10)}
                </span>
              </div>
              <div className="flex flex-1 justify-end">
                <button
                  type="button"
                  onClick={() => handleRemove(item.id)}
                  className="self-end"
                >
                  <TrashIcon className="h-[25px] w-[25px] fill-white hover:fill-error" />
                </button>
              </div>
            </li>
          ))
        ) : (
          <p className="mt-5">Наразі немає заявок...</p>
        )}
      </ul>
      {isFetching && <Loader />}
    </div>
  );
};

export default HrApplications;
