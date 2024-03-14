'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { constants } from '@/constants';
import { getHrApplications } from '@/api/hr_application';
import { getEmptyValue } from '@/helpers/getEmptyValue';
import { translateCountry } from '@/helpers/translateCountry';

const HrApplication = ({ id }: { id: string }) => {
  const { data, isFetching } = useQuery({
    queryKey: [constants.hr_applications.FETCH_HRS],
    queryFn: getHrApplications,
  });

  const hr = data?.find((hr) => hr.id === +id);

  if (isFetching) return <p>Loading...</p>;

  return (
    <div className="flex min-h-[100vh] items-center justify-center p-[24px]">
      <div className="mx-auto flex w-2/3 flex-col items-center justify-center gap-[24px] border border-gray p-[30px]">
        <h2 className="mb-[50px] text-3xl font-medium">
          {hr?.first_name} {hr?.last_name}
        </h2>

        <span className="flex-1  text-xl">
          Телефон: {hr?.phone}
        </span>
        <span className="flex-1 text-xl">
          Email: {hr?.email}
        </span>

        <span className="flex-1  text-xl">
          Компанія: {getEmptyValue(hr?.company)}
        </span>
        <span className="flex-1  text-xl">
          Країна:{' '}
          {getEmptyValue(translateCountry(hr?.country))}
        </span>

        <div className="flex w-full justify-around gap-[24px]">
          <span className="text-xl">
            Я шукаю спеціалістів: {hr?.specialization}
          </span>
        </div>
        <h3 className="mb-[24px] mt-[24px] text-2xl underline">
          Коментар:
        </h3>
        <span className="text-xl">{hr?.message}</span>
      </div>
    </div>
  );
};

export default HrApplication;
