'use client';

import { useQuery } from '@tanstack/react-query';

import { getContact } from '@/api/contacts';
import { constants } from '@/constants';
import type { IContacts } from '@/types/contacts';

export interface IContactData {
  type: string;
  value?: string;
  link: string;
}
export interface ISocialLinks {
  icon: string;
  link?: string;
}

export function useContactsData() {
  const { data, isLoading, error } = useQuery<IContacts[], Error>({
    queryKey: [constants.contacts.FETCH_CONTACTS],
    queryFn: getContact
  });

  const contact: IContacts | undefined =
    data &&
    [...data].reduce((acc, item) => {
      return { ...acc, ...item };
    }, {} as IContacts);

  const contactTel: IContactData[] = [
    {
      type: 'tel',
      value: contact?.phone_1,
      link: `tel:${contact?.phone_1.replace(/\s+/g, '')}`
    },
    {
      type: 'tel',
      value: contact?.phone_2,
      link: `tel:${contact?.phone_2.replace(/\s+/g, '')}`
    }
  ];

  const contactEmail: IContactData[] = [
    {
      type: 'email',
      value: contact?.email,
      link: `mailto:${contact?.email}`
    },
    {
      type: 'email',
      value: 'cv@baza-skill.com.ua',
      link: 'mailto:cv@baza-skill.com.ua'
    }
  ];

  const socialLinks: ISocialLinks[] = [
    {
      icon: 'instagram',
      link: contact?.instagram
    },
    {
      icon: 'lnkedIn',
      link: contact?.linkedin
    },
    { icon: 'discord', link: contact?.discord },
    {
      icon: 'telegram',
      link: contact?.telegram
    },
    {
      icon: 'facebook',
      link: contact?.facebook
    }
  ];

  return { contactTel, contactEmail, socialLinks, isLoading, error };
}
