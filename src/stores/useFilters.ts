import { create } from 'zustand';

interface FiltersState {
  speciality: string;
  country: string;
  setFilterBySpeciality: (query: string) => void;
  setFilterByCountry: (query: string) => void;
}

export const useFilters = create<FiltersState>(set => ({
  speciality: '',
  country: '',

  setFilterBySpeciality: (query) => {
    set({ speciality: query });
  },

  setFilterByCountry: (query) => {
    set({ country: query});
  },
}));
