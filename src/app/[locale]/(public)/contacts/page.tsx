import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import type { PageProps } from '@/types';
import Contacts from '@/components/pages/contacts/Contacts';
import CookiesModal from '@/components/shared/modals/cookies/CookiesModal';

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'Metadata',
  });

  return {
    title: t('contacts_title'),
    description: t('contacts_description'),
  };
}

export default function ContactsPage(): JSX.Element {
  return (
    <>
      <Contacts />
      <CookiesModal />
    </>
  );
}
