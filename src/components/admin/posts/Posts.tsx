'use client';

import React from 'react';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';

import PageTitle from '../ui/PageTitle';
import Post from './Post';
import Loader from '../../shared/loader/Loader';
import PlusIcon from '@/components/icons/Admin-icons/PlusIcon';

import { constants } from '@/constants';
import { getPosts } from '@/api/posts';

const Posts = () => {
  const { data, isFetching } = useQuery({
    queryKey: [constants.posts.FETCH_POSTS],
    queryFn: getPosts,
  });

  return (
    <div className="relative pl-[24px] pt-[20px]">
      <PageTitle title={'Статті та поради'} />
      <section className="flex flex-col flex-wrap gap-[24px] gap-y-12 pt-[50px] md:flex-row">
        <article className="flex h-[336px] w-[442px] flex-col items-center justify-center rounded-[10px] border-[2px] border-[#7EFE92] md:w-[217px] xl:w-[340px] 5xl:h-[336px] 5xl:w-[464px]">
          <Link
            href={'/admin/posts/add'}
            className="flex flex-col items-center"
          >
            <PlusIcon />
            <p className="font-sans text-[20px] leading-[1.3] text-[#4DC760]">
              Додати статтю
            </p>
          </Link>
        </article>
        {data?.reverse().map((post) => {
          return (
            <Post key={post.id} {...post} isAdmin={true} />
          );
        })}
      </section>
      {isFetching && <Loader />}
    </div>
  );
};

export default Posts;
