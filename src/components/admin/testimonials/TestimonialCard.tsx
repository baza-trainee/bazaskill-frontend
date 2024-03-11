'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Testimonial } from '@/types/testimonials';
import Link from 'next/link';
import WriteIcon from '@/components/icons/Admin-icons/WriteIcon';
import TrashIcon from '@/components/icons/Admin-icons/TrashIcon';
import './testimonial.css';
import { deleteTestimonial } from '@/api/testimonials';
import QuestionAlert from '../alerts/QuestionAlert';
import SuccessAlert from '../alerts/SuccessAlert';

const TestimonialCard = ({
  item,
}: {
  item: Testimonial;
}) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const handlerDelete = async (id: string) => {
    try {
      const response = await deleteTestimonial(id);
      if (response.status === 200) {
        setIsDelete(true);
        setIsSuccess(true);
        console.log('Testimonial deleted successfully');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteConfirm = () => {
    setIsDeleting(true);
    handlerDelete(item.id);
  };

  return (
    <div className="flex  items-center py-[30px]  pr-[35px] [border-bottom:1px_solid_#787878]   [border-top:1px_solid_#787878] xl:gap-[248px]">
      <div className="flex gap-[50px] 5xl:gap-[129px]">
        <div className="flex items-center gap-[24px] ">
          <div className="h-[122px] w-[122px]">
            <Image
              src={item.image_url}
              alt={item.name_ua}
              width={122}
              height={122}
              className="h-[90px] w-[90px] rounded-[8px] xl:h-[122px] xl:w-[122px]"
            />
          </div>
          <div className="w-[159px] text-start font-['Tahoma',_sans-serif]">
            <h4 className=" w-full w-full font-tahoma font-bold tracking-[.72px] text-white 4xl:text-[24px] ">
              {item.name_ua}
            </h4>
            <p className="font-open-sans text-[13px] font-normal tracking-[.4px] text-white 4xl:text-[20px]">
              {item.position}
            </p>
            <p className="font-open-sans font-normal text-white 4xl:text-[14px]">
              {item.date}
            </p>
          </div>
        </div>
        <p className="w-[400px] px-[32px] py-[22px] text-start font-['Open_Sans',_sans-serif] text-[14px] font-normal leading-[1.4] tracking-[0px]  text-white 4xl:text-[20px] 5xl:w-[716px]">
          {'“' + item.review_ua + '”'}
        </p>
      </div>
      <div className="flex gap-[32px]">
        <Link href={`/admin/testimonials/edit/${item.id}`}>
          <WriteIcon className="h-[32px] w-[32px] fill-white" />
        </Link>
        <button
          type="button"
          onClick={() => setIsDeleting(true)}
          className="cursor-pointer">
          <TrashIcon className="h-[32px] w-[32px] cursor-pointer fill-white" />
        </button>
        {isDeleting && (
          <QuestionAlert
            title="Ви впевнені, що хочете видалити відгук зі сторінки?"
            onCancel={() => setIsDeleting(false)}
            onConfirm={handleDeleteConfirm}
          />
        )}
        {isDelete && (
          <SuccessAlert
            title="Відгук видалено"
            onClose={() => setIsSuccess(false)}
            isSuccess={isSuccess}
          />
        )}
      </div>
    </div>
  );
};

export default TestimonialCard;
