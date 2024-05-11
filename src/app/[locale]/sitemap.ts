import { MetadataRoute } from 'next';
import { getLocale } from 'next-intl/server';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const locale = await getLocale();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/candidates`
  );
  const candidates = await response.json();

  const candidatesEntries: MetadataRoute.Sitemap =
    candidates.map(({ id }: { id: number }) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/candidate/${id}`,
    }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/candidates`,
      lastModified: new Date(),
    },
    ...candidatesEntries,
  ];
}
