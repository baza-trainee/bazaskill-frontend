'use client';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useQuery } from '@tanstack/react-query';
import { getDocuments } from '@/api/documents';
import { constants } from '@/constants';
import { useTranslations } from 'next-intl';
import { useCookies } from '@/stores/useCookies';
import {
  getLocalStorage,
  setLocalStorage,
} from '@/lib/storageHelper';
import Link from 'next/link';

interface CookiesModalProps {}

const CookiesModal: React.FC<CookiesModalProps> = () => {
  const t = useTranslations('Main.cookies');
  const { setCookie } = useCookies();

  const [showPanel, setShowPanel] =
    useState<boolean>(false);

  const { data } = useQuery({
    queryKey: [constants.documents.FETCH_DOCUMENTS],
    queryFn: getDocuments,
  });

  const privacyPolicy = data?.find(
    (item) => item.title === 'privacy_policy'
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
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage(
      'cookie_consent',
      null
    );

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    setLocalStorage('cookie_consent', cookieConsent);
  }, [cookieConsent]);

  return (
    showPanel && (
      <div className="container fixed bottom-0 left-0 right-0 z-[1000] z-[1500] min-h-[180px] w-[90vw] bg-[#F8FAFC] px-5 md:w-[600px]">
        <div className="flex flex-col justify-between py-6">
          <div className="mb-[25px] max-w-[564px] text-lg">
            {t('text')}{' '}
            <Link
              className="text-base font-bold underline"
              href={`/docs/${privacyPolicy?.title}`}
            >
              {t('privacy_policy')}
            </Link>
          </div>

          <div className="flex max-h-[61px]">
            <button
              type="button"
              onClick={acceptCookies}
              className="h-[36px] w-[180px] rounded-md border-2	border-green text-green"
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default CookiesModal;
