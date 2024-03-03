'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import Cookies from 'js-cookie';

interface CookiesModalProps {}

const CookiesModal: React.FC<CookiesModalProps> = () => {
  const [showPanel, setShowPanel] =
    useState<boolean>(false);

  useEffect(() => {
    if (!Cookies.get('cookiesAccepted')) {
      setShowPanel(true);
    }
  }, []);

  const acceptCookies = (): void => {
    setShowPanel(false);
    Cookies.set('cookiesAccepted', 'true', {
      expires: 365,
    });
  };

  return (
    showPanel && (
      <div className="container fixed bottom-0 left-0 right-0 z-[1000] h-[180px] w-[600px] bg-[#F8FAFC] px-5">
        <div className="flex flex-col justify-between py-6">
          <div className="mb-[25px] max-w-[564px] text-lg">
            Цей сайт використовує файли cookies для
            правильної роботи і покращення сервісу. Якщо ви
            погоджуєтесь з їхнім використанням, натисніть
            ОК. Більше інформації в{' '}
            <Link
              className="text-base font-bold underline	"
              href="/privacy-policy"
            >
              Політика конфіденційності.
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
