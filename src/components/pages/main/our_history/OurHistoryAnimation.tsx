import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";


const images = [
  { src: '/images/our_history/image_1.png', alt: 'Baza Trainee Ukraine' },
  { src: '/images/our_history/image_2.png', alt: 'Baza Educat' },
  { src: '/images/our_history/image_3.png', alt: 'Baza Skill' },
  { src: '/images/our_history/image_4.png', alt: 'Baza Polygon' },
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
        className="relative perspective-[1000px] hidden md:block w-full xl:w-full mx-auto h-[648px]"
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
                left: isActive ? '150px' : order === 1 ? '0px' : order === 2 ? '150px' : '300px',
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

      <figure className="block md:hidden w-full">
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
    </>
  )
}

export default OurHistoryAnimation
