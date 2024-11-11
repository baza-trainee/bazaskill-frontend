import EditSpecialization from '@/components/pages/admin/specializations/EditSpecialization';

function EditSpecializationPage({ params }: { params: { id: string } }) {
  return <EditSpecialization id={params.id} />;
}

export default EditSpecializationPage;
