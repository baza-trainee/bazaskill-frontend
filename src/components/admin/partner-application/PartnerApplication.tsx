'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { constants } from '@/constants';
import { getPartnerApplications } from '@/api/partner_application';
import { getEmptyValue } from '@/helpers/getEmptyValue';
import { translateCountry } from '@/helpers/translateCountry';

const PartnerApplication = ({ id }: { id: string }) => {
  const { data, isFetching } = useQuery({
    queryKey: [
      constants.partner_applications.FETCH_PARTNERS,
    ],
    queryFn: getPartnerApplications,
  });

  const partner = data?.find(
    (partner) => partner.id === +id
  );

  if (isFetching) return <p>Loading...</p>;

  return (
    <div className="flex min-h-[100vh] items-center justify-center p-[24px]">
      <div className="mx-auto flex w-2/3 flex-col items-center justify-center gap-[24px] border border-gray p-[30px]">
        <h2 className="mb-[50px] text-3xl font-medium">
          {partner?.company_name}
        </h2>

        <span className="flex-1  text-xl">
          Сторінка компанії: {partner?.company_url}
        </span>

        <span className="flex-1  text-xl">
          Моє ім’я: {partner?.first_name}{' '}
          {partner?.last_name}
        </span>

        <span className="flex-1  text-xl">
          Я займаю посаду: {partner?.position}
        </span>

        <span className="flex-1  text-xl">
          Телефон: {partner?.phone}
        </span>
        <span className="flex-1 text-xl">
          Email: {partner?.email}
        </span>

        <span className="flex-1  text-xl">
          Країна:{' '}
          {getEmptyValue(
            translateCountry(partner?.country)
          )}
        </span>

        <div className="flex w-full justify-around gap-[24px]">
          <span className="text-xl">
            Я шукаю спеціалістів: {partner?.specialist}
          </span>
        </div>
        <h3 className="mb-[24px] mt-[24px] text-2xl underline">
          Коментар:
        </h3>
        <span className="text-xl">{partner?.message}</span>
      </div>
    </div>
  );
};

export default PartnerApplication;
