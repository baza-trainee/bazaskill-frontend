"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const images = [
  { src: '/images/our_history/image_1.png', alt: 'Baza Trainee Ukraine' },
  { src: '/images/our_history/image_2.png', alt: 'Baza Educat' },
  { src: '/images/our_history/image_3.png', alt: 'Baza Skill' },
  { src: '/images/our_history/image_4.png', alt: 'Baza Polygon' },
];

export const OurHistory = () => {
  const t = useTranslations("Main.history");

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const descriptionStyle =
    "lg:text-[20px] md:text-[1rem] tracking-[0.02em] text-white font-normal leading-[130%]";

  return (
    <section
      className="container pt-[100px] flex flex-col-reverse md:grid md:grid-cols-2 lg:gap-[24px] gap-[10px]"
      aria-labelledby="history-title"
    >
      <div
        className="relative perspective-[1000px] hidden md:block h-[648px]"
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
      <div className="2xl:px-[40px] md:h-[648px]">
        <h2
          id="history-title"
          className="text-center lg:mb-[48px] md:mb-[28px] font-tahoma text-[24px] font-bold text-white md:text-2xl 2xl:text-[40px]"
        >
          {t("title")}
        </h2>
        <p className={descriptionStyle}>{t("description_1")}</p>
        <br />
        <p className={descriptionStyle}>{t("description_2")}</p>
        <br />
        <p className={descriptionStyle}>{t("description_3")}</p>
        <br />
        <p className={descriptionStyle}>{t("description_4")}</p>
      </div>
    </section>
  );
};
