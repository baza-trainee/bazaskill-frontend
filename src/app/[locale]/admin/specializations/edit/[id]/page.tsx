import EditSpecialization from '@/components/admin/specializations/EditSpecialization';

function EditSpecializationPage({
  params,
}: {
  params: { id: string };
}) {
  return <EditSpecialization id={params.id} />;
}

export default EditSpecializationPage;
