import CandidatePageComponent from '@/components/candidate/CandidatePage/CandidatePage';
const Candidate = ({
  params,
}: {
  params: { id: string };
}) => {
  return (
    <div className="bg-graphite">
      <CandidatePageComponent id={params.id} />
    </div>
  );
};

export default Candidate;
