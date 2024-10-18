import { create } from 'zustand';

interface FiltersState {
  speciality: string;
  country: string;
  stack: string[];
  filters: any[];
  setFilterBySpeciality: (query: string) => void;
  setFilterByCountry: (query: string) => void;
  setFilterByStack: (query: string[]) => void;
  setFilters: (query: any) => void;
}

export const useFilters = create<FiltersState>(set => ({
  speciality: '',
  country: '',
  stack: [],
  filters: [],

  setFilterBySpeciality: (query) => {
    set({ speciality: query, stack: [], filters: [] });
  },

  setFilterByCountry: (query) => {
    set({ country: query, stack: [], filters: [] });
  },

  setFilterByStack: (query) => {
    set({
      stack: query,
      speciality: '',
      country: '',
      filters: [],
    });
  },

  setFilters: (query) => {
    set({
      filters: query,
      stack: [],
      speciality: '',
      country: '',
    });
  },
}));
