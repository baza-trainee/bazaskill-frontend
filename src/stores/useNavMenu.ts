import { create } from 'zustand';

interface NavMenuState {
  isOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

export const useNavMenu = create<NavMenuState>((set, get) => ({
  isOpen: false,
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
  closeMenu: () => {
    set({ isOpen: false });
  }
}));
