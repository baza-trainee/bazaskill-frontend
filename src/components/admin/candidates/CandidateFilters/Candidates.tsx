import CandidatesList from './CandidatesList';
import CandidatesSearch from './CandidatesSearch';
import Filters from './Filters';

const Candidates = () => {
  return (
    <div className="flex flex-col">
      <CandidatesSearch />
      <div className="flex justify-start">
        <Filters />
        <CandidatesList />
      </div>
    </div>
  );
};

export default Candidates;
