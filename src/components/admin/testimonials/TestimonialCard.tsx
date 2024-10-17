'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Testimonial } from '@/types/testimonials';
import Link from 'next/link';
import WriteIcon from '@/components/shared/icons/Admin-icons/WriteIcon';
import TrashIcon from '@/components/shared/icons/Admin-icons/TrashIcon';
import './testimonial.css';
import { deleteTestimonial } from '@/api/testimonials';
import QuestionAlert from '../alerts/QuestionAlert';
import SuccessAlert from '../alerts/SuccessAlert';

const TestimonialCard = ({
  item,
  onDelete,
}: {
  item: Testimonial;
  isEdit?: boolean;
  onDelete: () => void;
}) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const handlerDelete = async (id: string) => {
    try {
      const response = await deleteTestimonial(id);
      if (response.status === 200) {
        setIsSuccess(true);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error('Неочікувана помилка', error);
      }
    }
  };

  const handleDeleteConfirm = () => {
    handlerDelete(item.id);
    setIsDeleting(true);
  };

  const handleSuccessAlertClose = () => {
    setIsSuccess(false);
    setIsDeleting(false);
    onDelete();
  };

  return (
    <div className="flex items-center justify-between  py-2.5  pr-[15px] [border-bottom:1px_solid_#787878]  [border-top:1px_solid_#787878]   5xl:py-[30px] 5xl:pr-[35px]">
      <div className="flex gap-10 5xl:gap-[129px]">
        <div className="flex items-center gap-6 ">
          <div className="h-[90px] w-[90px] grayscale filter 5xl:h-[122px] 5xl:w-[122px]">
            <Image
              src={item.image_url}
              alt={item.name_ua}
              width={122}
              height={122}
              className="h-[90px] w-[90px] rounded-[8px] object-cover 5xl:h-[122px] 5xl:w-[122px]"
            />
          </div>
          <div className="w-[129px] text-start font-['Tahoma',_sans-serif] 4xl:w-[159px]">
            <h4 className=" w-full w-full font-tahoma text-lg font-bold tracking-[.72px] text-white 5xl:text-2xl ">
              {item.name_ua}
            </h4>
            <p className="font-open-sans text-[16px] font-normal tracking-[.4px] text-white 5xl:text-xl">
              {item.position}
            </p>
            <p className="font-open-sans text-sm font-normal text-white">
              {item.date}
            </p>
          </div>
        </div>
        <p className="w-[380px] px-8 py-[22px] text-start  text-lg font-normal leading-[1.4] tracking-[0px] text-white  xl:w-[480px] 5xl:w-[716px] 5xl:text-xl">
          {'“' + item.review_ua + '”'}
        </p>
      </div>
      <div className="flex gap-8">
        <Link href={`/admin/testimonials/edit/${item.id}`}>
          <WriteIcon className="h-8 w-8 fill-white" />
        </Link>
        <button
          type="button"
          onClick={() => setIsDeleting(true)}
          className="cursor-pointer"
        >
          <TrashIcon className="h-8 w-8 cursor-pointer fill-white" />
        </button>
        {isDeleting && !isSuccess && (
          <QuestionAlert
            title="Ви впевнені, що хочете видалити відгук зі сторінки?"
            onCancel={() => setIsDeleting(false)}
            onConfirm={handleDeleteConfirm}
          />
        )}
        {isSuccess && (
          <SuccessAlert
            title="Відгук видалено"
            onClose={handleSuccessAlertClose}
            isSuccess={isSuccess}
          />
        )}
      </div>
    </div>
  );
};

export default TestimonialCard;
