import { candidates } from './data';
import './styles.css';

const Candidates = () => {
  return (
    <section className="container relative py-[48px] xl:py-[60px]">
      <h3 className=" mb-[31px] text-center font-tahoma text-[24px] font-bold tracking-[1.08px] text-white md:text-2xl md:leading-6 lg:mb-[48px] lg:text-4xl xl:mb-[40px] xl:leading-7 2xl:leading-8">
        Наші кандидати
      </h3>
      <ul className="custom-list grid justify-center gap-5 text-white md:grid-cols-2 md:gap-[24px] md:text-base md:leading-7 xl:gap-[21px] xl:text-xl 2xl:gap-[27px]  2xl:leading-7 3xl:gap-[29px] 3xl:leading-6 4xl:gap-[21px]	5xl:gap-[21px]">
        {candidates.map((candidate) => (
          <li
            className="xs:w-auto xl:max-w-[466px] 2xl:max-w-[503px] 3xl:max-w-[495px] 4xl:max-w-[559px] 5xl:max-w-[654px]"
            key={candidate.id}
          >
            {candidate.text}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Candidates;
