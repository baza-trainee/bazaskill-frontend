function HelpListSkeleton() {
  return (
    <div className="mx-auto xs:w-[280px] sm:w-[380px] md:w-[293px] xl:w-[508px] 2xl:w-[592px] 4xl:w-[604px] 5xl:w-[708px]  ">
      <ul className="flex flex-wrap justify-center xs:gap-[20px] md:gap-[24px] xl:gap-[16px] 2xl:gap-[32px] 4xl:gap-[40px] 5xl:gap-[50px]">
        {Array.from({ length: 16 }).map((_, index) => (
          <li
            key={index}
            className="skeletonCard overflow-hidden rounded-full xs:size-[80px] xl:size-[112px] 2xl:size-[117px] 5xl:size-[132px]"
          >
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HelpListSkeleton;
