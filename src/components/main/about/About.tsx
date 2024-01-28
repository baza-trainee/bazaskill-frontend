import Image from 'next/image';
import React from 'react';
import Card from '../../../../public/images/about_main/card.webp';
import Pic from '../../../../public/images/about_main/pic.webp';
const About = () => {
  return (
    <section className="container relative flex w-full justify-between gap-[8%] pb-[60px] pt-[140px]">
      <div className="relative flex w-[46%] max-w-[590px] flex-col gap-[40px]">
        <h2 className="tahoma text-[40px] font-extrabold text-white">
          Чому{' '}
          <span className=" bg-gradient-to-r from-green to-yellow bg-clip-text text-transparent">
            Baza Skill
          </span>
        </h2>
        <ul className="tahoma flex list-disc flex-col gap-y-[25px] pl-[30px] text-[20px] text-white">
          <li>
            Унікальний проєкт з формуванням справжніх команд
            з ІТ розробки для справжніх проєктів
          </li>
          <li>
            Ми активно застосовуємо нові інструменти для
            професійного розвитку трейні
          </li>
          <li>
            Капітальне скорочення часу працедавця на
            on-boarding для нового працівника
          </li>
        </ul>
      </div>
      <div className="flex w-[46%] max-w-[590px] items-end justify-between">
        <Image
          alt="Кандидат якого шукає рекрутер"
          src={Card}
          width={203}
          height={230}
          className="rounded-[5%] object-contain"
        />

        <Image
          alt="Рекрутер який шукає кандидата"
          src={Pic}
          width={272}
          height={308}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default About;
