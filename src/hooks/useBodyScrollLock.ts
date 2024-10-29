'use client';
import { useEffect } from 'react';

export function useBodyScrollLock(shouldLock: boolean) {
  useEffect(() => {
    if (!shouldLock) {
      return;
    }
  
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
  
    document.body.style.paddingRight = `${scrollBarWidth}px`;
    document.body.classList.add('lock');
    console.log('Lock class added:', document.body.classList.contains('lock'));
  
    return () => {
      document.body.classList.remove('lock');
      document.body.style.paddingRight = '0px';
      console.log('Lock class removed:', !document.body.classList.contains('lock'));
    };
  }, [shouldLock]);
  
}
