import Image, { StaticImageData } from 'next/image';
import img from '../../../../public//images/our_history.png'


export const OurHistory = () => {

    return (
        <section className="container pt-[100px] flex flex-col-reverse md:grid md:grid-cols-2 lg:gap-[24px] gap-[10px]">
        <div>
          <Image src={img} alt='' className='h-[100%]'/>
        </div>
          <div className=' 2xl:px-[40px]'>
            <h2 
          className="text-center lg:mb-[48px] md:mb-[28px] font-tahoma text-[24px] font-bold text-white md:text-2xl 2xl:text-[40px]">
              Наша історія
          </h2>
            <p className=" lg:text-[20px]  md:text-[1rem] tracking-[0.02em] text-white font-normal leading-[130%]">
              Рекрутингова агенція Baza Skill - це частина освітнього проєкту Baza
              Trainee Ukraine, метою якого є навчання, розвиток та підтвердження
              професійних навичок ІТ-спеціалістів. <br></br> <br></br> В проєкті випускники ІТ-курсів,
              світчери, студенти технічних вузів практикуються у створенні реальних
              цифрових продуктів в команді. <br></br> <br></br> Кожен представлений тут фахівець
              заґартовний в командній роботі, має досвід в розробці проєкту від
              зняття вимог до релізу, спробував себе у різних ролях знайомий під час
              розробки і ознайомлений з усіма труднощами і успіхом на різних
              життєвих стадіях проєкту. <br></br> <br></br> Платформа Baza Skill допоможе вам підібрати
              досвідченого спеціаліста в сфері IT, оскільки кожен з наших кандидатів
              вже пройшов підтверджену практику на Baza Trainee Ukraine і отримує
              нашу рекомендацію.
            </p>
          </div>
        </section>
    );
  };

