'use client';
import { useQuery } from '@tanstack/react-query';
import Cookies from 'js-cookie';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import CloseIcon from '@/components/shared/icons/CloseIcon';

import { getDocuments } from '@/api/documents';
import { constants } from '@/constants';
import {
  getLocalStorage,
  setLocalStorage,
} from '@/lib/storageHelper';
import { useCookies } from '@/stores/useCookies';

interface CookiesModalProps { }

const CookiesModal: React.FC<CookiesModalProps> = () => {
  const [cookieConsent, setCookieConsent] = useState(false);
  const t = useTranslations('Main.cookies');
  const { setCookie } = useCookies();
  const locale: string = useLocale();
  const [showPanel, setShowPanel]
    = useState<boolean>(false);

  const { data } = useQuery({
    queryKey: [constants.documents.FETCH_DOCUMENTS],
    queryFn: getDocuments,
  });

  const privacyPolicy = data?.find(
    item => item.title === 'privacy_policy',
  );

  useEffect(() => {
    if (!Cookies.get('cookiesAccepted')) {
      setShowPanel(true);
    }
  }, []);

  const acceptCookies = (): void => {
    Cookies.set('cookiesAccepted', 'true', {
      expires: 1 / 48,
      sameSite: 'Lax',
    });
    setCookie();
    setCookieConsent(true);
    setShowPanel(false);
  };

  useEffect(() => {
    const storedCookieConsent = getLocalStorage(
      'cookie_consent',
      null,
    );

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    setLocalStorage('cookie_consent', cookieConsent);
  }, [cookieConsent]);

  const createLinck = (value: string | undefined): string => {
    return value ? `${locale}/docs/${value}` : '/'
  }

  return (
    showPanel && (
      <div className="container rounded-md fixed inset-x-0 bottom-[30px] md:bottom-[50px] md:top-auto z-[1500] min-h-[180px] w-[90vw] bg-[#F8FAFC] px-5 md:w-[600px]">
        <div className="relative flex flex-col justify-between pt-9 py-6">
          <div className="mb-[25px] max-w-[564px] text-lg text-black">
            {t('text')}
            {' '}
            <Link
              className="text-base font-bold underline duration-300 hover:text-blue-800"
              href={createLinck(privacyPolicy?.title)}>
              {t('privacy_policy')}
            </Link>
          </div>

          <div className="flex max-h-[61px]">
            <button
              type="button"
              onClick={acceptCookies}
              className="border-2 border-green h-[36px] w-[180px] rounded-md text-green duration-300 hover:text-yellow  hover:bg-greenBg"
            >
              Ok
            </button>
          </div>

        </div>

        <button
          type="button"
          onClick={() => setShowPanel(false)}
          className='absolute top-2 duration-300 hover:opacity-70 right-2 p-1'>
          <CloseIcon />
        </button>
      </div>
    )
  );
};

export default CookiesModal;
