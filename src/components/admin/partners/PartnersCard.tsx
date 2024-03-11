'use client';
import Image from 'next/image';
import { IPartners } from '@/types/partners';
import Link from 'next/link';
import WriteIcon from '@/components/icons/Admin-icons/WriteIcon';
import TrashIcon from '@/components/icons/Admin-icons/TrashIcon';

const PartnersCard = ({ item }: { item: IPartners }) => {
  return (
    <div className="relative flex h-[286px] w-[286px] flex-col items-center justify-center rounded-xl border-4">
      <div className="flex gap-[129px]">
        <div className="flex items-center gap-[24px] ">
          <Image
            src={item.image}
            alt={item.name}
            width={273}
            height={61}
            className=" rounded-[8px] "
          />
        </div>
      </div>
      <Link href={item.partner_url}>
        <div className="w-[159px] text-start">
          <h4 className="font-tahoma font-bold tracking-[.72px] text-white ">
            {item.name}
          </h4>
        </div>
      </Link>

      <div className="absolute bottom-0 right-0 flex gap-[32px] rounded-tl-lg bg-white p-2 ">
        <Link href={'/admin/partners/edit'}>
          <WriteIcon className="h-[32px] w-[32px] fill-black" />
        </Link>
        <button
          type="button"
          onClick={() => console.log(item.id)}
        >
          <TrashIcon className="h-[32px] w-[32px] fill-black" />
        </button>
      </div>
    </div>
  );
};

export default PartnersCard;
