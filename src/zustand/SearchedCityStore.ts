import { create } from 'zustand';

interface CityStore {
    cityName: string;
    setCityName: (cityName: string) => void;
}

export const useSearchedCityStore = create<CityStore>(set => ({
    cityName: '',
    setCityName: (cityName: string) => set({ cityName }),
}));
