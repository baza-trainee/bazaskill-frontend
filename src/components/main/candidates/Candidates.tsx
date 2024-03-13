import { candidates } from './data';
import './styles.css';

const Candidates = () => {
  return (
    <section className="container relative py-[60px]">
      <h3 className="mb-[50px] text-center font-tahoma text-[24px] font-bold tracking-[1.08px] text-white md:text-4xl">
        Наші кандидати
      </h3>
      <ul className="custom-list grid justify-center gap-4 text-white xs:text-base md:gap-8 md:text-xl xl:grid-cols-2">
        {candidates.map((candidate) => (
          <li
            className="xs:w-auto md:w-[520px]"
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
