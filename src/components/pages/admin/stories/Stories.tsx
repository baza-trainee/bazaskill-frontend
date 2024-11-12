'use client';

import Link from 'next/link';

import { useQuery } from '@tanstack/react-query';

import { getStories } from '@/api/stories';
import PlusIcon from '@/components/shared/icons/Admin-icons/PlusIcon';
import { constants } from '@/constants';

import Loader from '../../../shared/loader/Loader';
import PageTitle from '../ui/PageTitle';
import Card from './Card';

const Stories = () => {
  const { data, isFetching } = useQuery({
    queryKey: [constants.stories.GET_STORIES],
    queryFn: getStories
  });
  console.log(data);
  return (
    <div className="relative py-[20px] pl-[24px]">
      <PageTitle title="Статті та поради" />
      <section className="flex flex-wrap gap-[24px] gap-y-12 pt-[50px] md:flex-row">
        <article className="flex h-[336px] w-[442px] flex-col items-center justify-center rounded-[10px] border-2 border-[#7EFE92] md:w-[217px] xl:w-[340px] 5xl:h-[336px] 5xl:w-[464px]">
          <Link
            href="/admin/stories/add"
            className="flex flex-col items-center"
          >
            <PlusIcon />
            <p className="font-sans text-[20px] leading-[1.3] text-[#4DC760]">
              Додати історію
            </p>
          </Link>
        </article>
        {data &&
          Array.isArray(data) &&
          data.map((story) => <Card key={story.id} data={story as any} />)}
      </section>
      {isFetching && <Loader />}
    </div>
  );
};

export default Stories;
