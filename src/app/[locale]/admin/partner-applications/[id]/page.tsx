import PartnerApplication from '@/components/admin/partner-application/PartnerApplication';

const PartnerApplicationPage = ({
  params,
}: {
  params: { id: string };
}) => {
  return <PartnerApplication id={params.id} />;
};

export default PartnerApplicationPage;
