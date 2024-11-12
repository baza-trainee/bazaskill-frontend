import Image from 'next/image';
import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';

const images = [
  { src: '/images/our_history/image_1.webp', alt: 'Baza Trainee Ukraine' },
  { src: '/images/our_history/image_2.webp', alt: 'Baza Educat' },
  { src: '/images/our_history/image_3.webp', alt: 'Baza Skill' },
  { src: '/images/our_history/image_4.webp', alt: 'Baza Polygon' }
];

const OurHistoryAnimation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div
        className="perspective-[1000px] relative mx-auto hidden h-[648px] w-full md:block xl:w-full"
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
                top: isActive
                  ? 0
                  : `${150 + order * 50 + (order > 1 ? (order - 1) * 50 : 0)}px`,
                left: isActive
                  ? '150px'
                  : order === 1
                    ? '0px'
                    : order === 2
                      ? '150px'
                      : '300px',
                rotateX: isActive ? 0 : 45,
                y: isActive ? 0 : 20 * order,
                scaleY: isActive ? 1 : 1.1
              }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
              className="absolute origin-top shadow-lg"
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
                  className="min-h-[200px] object-cover"
                />
                <figcaption className="sr-only">{image.alt}</figcaption>
              </figure>
            </motion.div>
          );
        })}
      </div>

      <figure className="block w-full md:hidden">
        <Image
          src={'/images/our_history/our_history.webp'}
          alt={'image'}
          priority={false}
          width={500}
          height={300}
          className="min-h-[200px] w-full object-cover"
        />
        <figcaption className="sr-only">{'image'}</figcaption>
      </figure>
    </>
  );
};

export default OurHistoryAnimation;
