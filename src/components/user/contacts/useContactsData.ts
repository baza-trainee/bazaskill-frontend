'use client';

import { useQuery } from '@tanstack/react-query';

import type { IContacts } from '@/types/contacts';

import { getContact } from '@/api/contacts';
import { constants } from '@/constants';

interface IContactData {
  type: string;
  value?: string;
  link: string;
}
interface ISocialLinks {
  icon: string;
  link?: string;
}

export function useContactsData() {
  const { data, isLoading, error } = useQuery<
    IContacts[],
    Error
  >({
    queryKey: [constants.contacts.FETCH_CONTACTS],
    queryFn: getContact,
  });

  const contact: IContacts | undefined
    = data
    && [...data].reduce((acc, item) => {
      return { ...acc, ...item };
    }, {} as IContacts);

  const contactData: IContactData[] = [
    {
      type: 'tel',
      value: contact?.phone_1,
      link: `tel:${contact?.phone_1}`,
    },
    {
      type: 'tel',
      value: contact?.phone_2,
      link: `tel:${contact?.phone_2}`,
    },
    {
      type: 'email',
      value: contact?.email,
      link: `mailto:${contact?.email}`,
    },
    {
      type: 'email',
      value: 'cv@baza-skill.com.ua',
      link: 'mailto:cv@baza-skill.com.ua',
    },
  ];

  const socialLinks: ISocialLinks[] = [
    // {
    //   icon: 'instagram',
    //   link: contact?.instagram,
    // },
    {
      icon: 'lnkedIn',
      link: contact?.linkedin,
    },
    { icon: 'discord', link: contact?.discord },
    {
      icon: 'telegram',
      link: contact?.telegram,
    },
    {
      icon: 'facebook',
      link: contact?.facebook,
    },
  ];

  return { contactData, socialLinks, isLoading, error };
}
