import { create } from 'zustand';

interface FiltersState {
  speciality: string;
  country: string;
  stack: string[];
  setFilterBySpeciality: (query: string) => void;
  setFilterByCountry: (query: string) => void;
  setFilterByStack: (query: string[]) => void;
}

export const useFilters = create<FiltersState>((set) => ({
  speciality: '',
  country: '',
  stack: [],
  setFilterBySpeciality: (query) => {
    set({ speciality: query, stack: [] });
  },
  setFilterByCountry: (query) => {
    set({ country: query, stack: [] });
  },
  setFilterByStack: (query) => {
    set({ stack: query, speciality: '', country: '' });
  },
}));
