'use client';

import Image from 'next/image';

import type { UseQueryResult } from '@tanstack/react-query';
import type { TPartner } from '@/types/partners';

import { useQuery } from '@tanstack/react-query';
import { useTranslations } from 'next-intl';
import { getPartners } from '@/api/partners';
import { constants } from '@/constants';

import './partners.css'

const Partners: React.FC = () => {
  const t = useTranslations('Main.partners');

  // Fetch partners data using react-query
  const { data: partners, isLoading, error }: UseQueryResult<TPartner[], Error> = useQuery({
    queryKey: [constants.partners.FETCH_PARTNERS],
    queryFn: getPartners,
  });

  // Render loading or error state
  if (isLoading) return <div aria-live="polite">Loading...</div>;
  if (error) return <div aria-live="polite">Error loading partners</div>;

  return (
    <section
      className="overflow-hidden my-[50px] w-full"
      aria-labelledby="partners-title"
    >
      <h2
        id="partners-title"
        className="mb-[53px] mt-[10px] text-center font-tahoma text-[24px] font-bold not-italic text-white md:text-2xl lg:text-[40px]"
      >
        {t('title')}
      </h2>
      {partners && partners.length && <div className="relative flex gap-[1rem] md:gap-[3rem] flex-col overflow-hidden w-full py-10">
        {/* Marquee row 1 */}
        <div className="marquee flex" aria-live="polite" aria-atomic="true">
          {partners.map((partner) => (
            <figure key={partner.id} className="partner-item mx-4">
              <Image
                width={350}
                height={150}
                src={partner.image_url}
                alt={partner.name}
                className='w-full min-w-[200px] md:min-w-[350px] aspect-video object-contain border-[1rem] rounded-md border-zinc-300 grayscale hover:filter-none hover:scale-110 transition ease-in-out duration-700 p-2 bg-white'
              />
              <figcaption className="sr-only">{partner.name}</figcaption>
            </figure>
          ))}
          {partners.map((partner) => (
            <figure key={`dup-${partner.id}`} className="partner-item mx-4">
              <Image
                width={350}
                height={150}
                src={partner.image_url}
                alt={partner.name}
                className='w-full min-w-[200px] md:min-w-[350px] aspect-video object-contain border-[1rem] rounded-md border-zinc-300 grayscale hover:filter-none hover:scale-110 transition ease-in-out duration-700 p-2 bg-white'
              />
              <figcaption className="sr-only">{partner.name}</figcaption>
            </figure>
          ))}
          {partners.map((partner) => (
            <figure key={`dup-${partner.id}`} className="partner-item mx-4">
              <Image
                width={350}
                height={150}
                src={partner.image_url}
                alt={partner.name}
                className='w-full min-w-[200px] md:min-w-[350px] aspect-video object-contain border-[1rem] rounded-md border-zinc-300 grayscale hover:filter-none hover:scale-110 transition ease-in-out duration-700 p-2 bg-white'
              />
              <figcaption className="sr-only">{partner.name}</figcaption>
            </figure>
          ))}
        </div>


        {/* Marquee row 2 */}
        <div className="marquee-right flex" aria-live="polite" aria-atomic="true">
          {partners.map((partner) => (
            <figure key={partner.id} className="partner-item mx-4">
              <Image
                width={350}
                height={150}
                src={partner.image_url}
                alt={partner.name}
                className='w-full min-w-[200px] md:min-w-[350px] aspect-video object-contain border-[1rem] rounded-md border-zinc-300 grayscale hover:filter-none hover:scale-110 transition ease-in-out duration-700 p-2 bg-white'
              />
              <figcaption className="sr-only">{partner.name}</figcaption>
            </figure>
          ))}
          {partners.map((partner) => (
            <figure key={`dup-${partner.id}`} className="partner-item mx-4">
              <Image
                width={350}
                height={150}
                src={partner.image_url}
                alt={partner.name}
                className='w-full min-w-[200px] md:min-w-[350px] aspect-video object-contain border-[1rem] rounded-md border-zinc-300 grayscale hover:filter-none hover:scale-110 transition ease-in-out duration-700 p-2 bg-white'
              />
              <figcaption className="sr-only">{partner.name}</figcaption>
            </figure>
          ))}
            {partners.map((partner) => (
            <figure key={`dup-${partner.id}`} className="partner-item mx-4">
              <Image
                width={350}
                height={150}
                src={partner.image_url}
                alt={partner.name}
                className='w-full min-w-[200px] md:min-w-[350px] aspect-video object-contain border-[1rem] rounded-md border-zinc-300 grayscale hover:filter-none hover:scale-110 transition ease-in-out duration-700 p-2 bg-white'
              />
              <figcaption className="sr-only">{partner.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>}
    </section>
  );
};

export default Partners;
