import CandidatesList from './CandidatesList';
import CandidatesTitle from './CandidatesTitle';
import Filters from './Filters';

const Candidates = () => {
  return (
    <div className="md:flex md:flex-col">
      <CandidatesTitle />
      <div className="md:flex md:justify-start">
        <Filters />
        <CandidatesList />
      </div>
    </div>
  );
};

export default Candidates;
