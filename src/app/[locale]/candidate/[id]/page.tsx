import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Loader from '@/components/admin/ui/Loader';

const DynamicPage = dynamic(
  () =>
    import(
      '@/components/candidate/CandidatePage/CandidatePage'
    ),
  {
    loading: () => <Loader />,
  }
);

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
    <div className="min-h-[100vh] bg-graphite">
      <DynamicPage id={params.id} />
    </div>
  );
};

export default Candidate;
