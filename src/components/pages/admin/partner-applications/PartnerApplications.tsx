'use client';

import Link from 'next/link';
import React from 'react';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  deleteApplication,
  getPartnerApplications
} from '@/api/partner_application';
import TrashIcon from '@/components/shared/icons/Admin-icons/TrashIcon';
import { constants } from '@/constants';
import { dateChecker } from '@/helpers/dateChecker';

import Loader from '../../../shared/loader/Loader';
import PageTitle from '../ui/PageTitle';

function PartnerApplications() {
  const queryClient = useQueryClient();

  const { data, isFetching, isError, error } = useQuery({
    queryKey: [constants.partner_applications.FETCH_PARTNER_APPLICATIONS],
    queryFn: getPartnerApplications
  });

  const deleteApplicationMutation = useMutation({
    mutationFn: deleteApplication,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [constants.partner_applications.FETCH_PARTNER_APPLICATIONS]
      });
    }
  });

  const handleRemove = (id: number) => {
    if (confirm('Ви дійсно хочете видалити заявку?')) {
      deleteApplicationMutation.mutate(id);
    }
  };
  if (isError) return <p>{`Error: ${error.message}`}</p>;

  return (
    <div className="relative h-screen max-h-screen p-[24px]">
      <PageTitle title="Заявки партнерів" />
      <ul className="mt-5 flex flex-col">
        {data && Array.isArray(data) && data.length ? (
          data.map((item) => (
            <li
              key={item.id}
              className={`flex h-16 items-center gap-[150px] border-b px-4 ${dateChecker(item.created_at) ? 'border-green' : 'border-gray'}`}
            >
              <div className="flex w-2/5 justify-between">
                <Link href={`/admin/partner-applications/${item.id}`}>
                  <div className="flex cursor-pointer gap-[5px] hover:text-green">
                    <span>{item.company_name}</span>
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
                  className=" mb-2 self-end"
                >
                  <TrashIcon className="size-[25px] fill-white hover:fill-error" />
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
}

export default PartnerApplications;
