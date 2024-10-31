"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useMediaQuery } from 'react-responsive';

const images = [
  { src: '/images/our_history/image_1.png', alt: 'Baza Trainee Ukraine' },
  { src: '/images/our_history/image_2.png', alt: 'Baza Educat' },
  { src: '/images/our_history/image_3.png', alt: 'Baza Skill' },
  { src: '/images/our_history/image_4.png', alt: 'Baza Polygon' },
];

 const OurHistory = () => {
  const t = useTranslations("Main.history");
  const [showText,setShowText] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery({ query: '(max-width: 420px)' });
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
      setShowText(!isMobile);
  }, [isMobile]);

  useEffect(() => {
    setIsClient(true)
  }, [])

  const descriptionStyle =
    "lg:text-[20px] md:text-[1rem] tracking-[0.02em] text-white font-normal leading-[130%]";

  return (
   <>
   {isClient &&  <section
      className="container pt-[100px] flex flex-col xl:grid xl:grid-cols-2 lg:gap-[24px] gap-[48px]"
      aria-labelledby="history-title"
    >
          <h2
          id="history-title"
          className="text-center xl:hidden lg:mb-[48px] md:mb-[28px] font-tahoma text-[24px] font-bold text-white md:text-2xl 2xl:text-[40px]"
        >
          {t("title")}
        </h2>
      <div
        className="relative perspective-[1000px] hidden md:block w-3/4 xl:w-full mx-auto h-[648px]"
        aria-live="polite"
        aria-atomic="true"
      >
        {images.map((image, index) => {
          const isActive = index === currentIndex;
          const order = (index - currentIndex + images.length) % images.length;
          return (
            <motion.div
              key={image.alt}
              layout
              initial={{ opacity: 1, rotateX: 45, y: 100 }}
              animate={{
                zIndex: isActive ? 20 : 10 + order,
                top: isActive ? 0 : `${150 + (order * 50) + (order > 1 ? (order - 1) * 50 : 0)}px`,
                left: isActive ? '150px' : order === 1 ? '0px': order=== 2 ? '150px' : '300px',
                rotateX: isActive ? 0 : 45,
                y: isActive ? 0 : 20 * order,
                scaleY: isActive ? 1 : 1.1,
              }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute shadow-lg origin-top"
              style={{ transformStyle: 'preserve-3d' }}
              role="img"
              aria-label={image.alt}
            >
              <figure>
                <Image
                  src={image.src}
                  alt={image.alt}
                  priority={isActive ? true : false}
                  width={isActive ? 500 : 300}
                  height={isActive ? 300 : 200}
                  className="object-cover min-h-[200px]"
                />
                <figcaption className="sr-only">{image.alt}</figcaption>
              </figure>
            </motion.div>
          );
        })}
      </div>
      <figure className="md:hidden w-full">
                <Image
                  src={'/images/our_history/our_history.png'}
                  alt={'image'}
                  priority={false}
                  width={500}
                  height={300}
                  className="object-cover min-h-[200px] w-full"
                />
                <figcaption className="sr-only">{'image'}</figcaption>
              </figure>
      <div className="2xl:px-[40px] md:h-[648px] ">
        <h2
          id="history-title"
          className="hidden xl:block text-center lg:mb-[48px] md:mb-[28px] font-tahoma text-[24px] font-bold text-white md:text-2xl 2xl:text-[40px]"
        >
          {t("title")}
        </h2>
        <p className={descriptionStyle}>{t("description_1")}</p>
        <br />
        <p className={descriptionStyle}>{t("description_2")}</p>
        <br />
       <div className={`${showText ? "block" : "hidden"}`}>
        <p className={descriptionStyle}>{t("description_3")}</p>
        <br />
        <p className={descriptionStyle}>{t("description_4")}</p>
       </div>
     {isMobile && !showText && 
          <button
          onClick={() => setShowText(!showText)} 
           className="relative mt-4 flex mx-auto text-green items-center justify-center p-[2px] overflow-hidden transition-all bg-gradient-to-r from-green via-green  to-yellow rounded-md group"
         >
           <span className="px-4 py-2 w-[80vw]  rounded-md bg-graphite group-hover:text-yellow transition ease-in-out duration-300">
           {"Дізнатись більше"}
           </span>
         </button>
        }
      
      </div>
    </section>}
   </>
  );
};

export default OurHistory