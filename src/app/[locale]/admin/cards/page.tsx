import dynamic from 'next/dynamic';

import Cards from '@/components/admin/cards/Cards';

const DynamicPage = dynamic(
  () =>
    import(
      '@/components/admin/cards/Cards'
    ),
)

function CardsPage() {
  return <DynamicPage />;
}

export default CardsPage;
