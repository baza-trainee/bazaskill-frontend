import PartnerApplication from '@/components/admin/partner-applications/PartnerApplication';

const PartnerApplicationPage = ({
  params,
}: {
  params: { id: string };
}) => {
  return <PartnerApplication id={params.id} />;
};

export default PartnerApplicationPage;
