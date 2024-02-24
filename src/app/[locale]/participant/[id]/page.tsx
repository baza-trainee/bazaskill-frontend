import ParticipantPage from '@/components/main/participants/participant_page/ParticipantPage';

const Participant = ({
  params,
}: {
  params: { id: string };
}) => {
  return <ParticipantPage id={params.id} />;
};

export default Participant;
