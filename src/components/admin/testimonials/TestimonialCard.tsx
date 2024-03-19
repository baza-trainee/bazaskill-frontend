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
  isEdit?: boolean;
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
      console.log(error);
    }
  };

  const handleDeleteConfirm = () => {
    handlerDelete(item.id);
    setIsDeleting(true);
  };

  const handleSuccessAlertClose = () => {
    setIsSuccess(false);
    setIsDeleting(false);
  };

  return (
    <div className="flex items-center gap-[170px] py-[10px]  pr-[15px] [border-bottom:1px_solid_#787878]  [border-top:1px_solid_#787878] 2xl:gap-[280px]   5xl:gap-[248px] 5xl:py-[30px] 5xl:pr-[35px]">
      <div className="flex gap-[40px] 5xl:gap-[129px]">
        <div className="flex items-center gap-[24px] ">
          <div className="h-[90px] w-[90px] 5xl:h-[122px] 5xl:w-[122px]">
            <Image
              src={item.image_url}
              alt={item.name_ua}
              width={122}
              height={122}
              className="h-[90px] w-[90px] rounded-[8px] 5xl:h-[122px] 5xl:w-[122px]"
            />
          </div>
          <div className="w-[129px] text-start font-['Tahoma',_sans-serif] 4xl:w-[159px]">
            <h4 className=" w-full w-full font-tahoma text-[18px] font-bold tracking-[.72px] text-white 4xl:text-[24px] ">
              {item.name_ua}
            </h4>
            <p className="font-open-sans text-[13px] font-normal tracking-[.4px] text-white 4xl:text-[20px]">
              {item.position}
            </p>
            <p className="font-open-sans text-[12px] font-normal text-white 5xl:text-[14px]">
              {item.date}
            </p>
          </div>
        </div>
        <p className="w-[380px] px-[32px] py-[22px] text-start font-['Open_Sans',_sans-serif] text-[14px] font-normal leading-[1.4] tracking-[0px] text-white  xl:w-[450px] 4xl:text-[20px] 5xl:w-[716px]">
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
