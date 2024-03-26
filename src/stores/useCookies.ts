import { create } from 'zustand';

interface CookiesState {
  isCookies: boolean;
  setCookie: () => void;
}

export const useCookies = create<CookiesState>((set) => ({
  isCookies: false,
  setCookie: () => {
    set({ isCookies: true });
  },
}));
