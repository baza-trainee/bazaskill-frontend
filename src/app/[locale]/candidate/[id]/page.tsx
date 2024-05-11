import { Metadata } from 'next';
import CandidatePageComponent from '@/components/candidate/CandidatePage/CandidatePage';

interface CandidatePageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: CandidatePageProps): Promise<Metadata> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/candidates/${params.id}`
  );
  const candidate = await response.json();
  return {
    title: `BazaSkill Candidate - ${candidate.name} ${candidate.surname} ${candidate.specialization.title}`,
    description: `${candidate.about}`,
  };
}

const Candidate = ({ params }: CandidatePageProps) => {
  return (
    <div className="bg-graphite">
      <CandidatePageComponent id={params.id} />
    </div>
  );
};

export default Candidate;
