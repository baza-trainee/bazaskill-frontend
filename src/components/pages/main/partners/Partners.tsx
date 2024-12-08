'use client';

import Image from 'next/image';

import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { useTranslations } from 'next-intl';

import { getPartners } from '@/utils/api/partners';
import { constants } from '@/constants';
import type { TPartner } from '@/types/partners';

import './partners.css';

const PartnerItem: React.FC<{ partner: TPartner }> = ({ partner }) => (
  <figure className="partner-item mx-4">
    <Image
      width={350}
      height={150}
      src={partner.image_url}
      alt={partner.name}
      className="aspect-video w-full min-w-[90vw] rounded-md 
      border-[1rem] border-zinc-300 bg-white object-contain 
      p-2 grayscale transition duration-700 ease-in-out 
      hover:scale-110 hover:filter-none sm:min-w-[350px]"
    />
    <figcaption className="sr-only">{partner.name}</figcaption>
  </figure>
);

const Partners: React.FC = () => {
  const t = useTranslations('Main.partners');

  const {
    data: partners,
    isLoading,
    error
  }: UseQueryResult<TPartner[], Error> = useQuery({
    queryKey: [constants.partners.FETCH_PARTNERS],
    queryFn: getPartners
  });

  if (isLoading) return <div aria-live="polite">Loading...</div>;
  if (error) return <div aria-live="polite">Error loading partners</div>;

  return (
    <section
      className="w-full overflow-hidden py-12 md:py-[60px] lg:py-[100px]"
      aria-labelledby="partners-title"
    >
      <h2
        id="partners-title"
        className="mb-[53px] mt-[10px] text-center font-tahoma text-[24px] font-bold not-italic text-white md:text-2xl lg:text-[40px]"
      >
        {t('title')}
      </h2>

      {partners?.length ? (
        <div className="relative flex w-full flex-col gap-[1rem] overflow-hidden py-10 md:gap-[3rem]">
          <div className="marquee flex" aria-live="polite" aria-atomic="true">
            {partners.map((partner) => (
              <PartnerItem key={partner.id} partner={partner} />
            ))}
          </div>

          <div className="marquee-right flex" aria-live="polite" aria-atomic="true">
            {partners.map((partner) => (
              <PartnerItem key={`dup-${partner.id}`} partner={partner} />
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default Partners;
