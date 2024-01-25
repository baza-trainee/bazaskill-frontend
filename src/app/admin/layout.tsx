import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BazaSkill Admin',
  description: 'Generated by create next app',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
