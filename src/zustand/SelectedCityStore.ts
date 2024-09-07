import { create } from 'zustand';

interface CityState {
    selectedDay: number;
    setSelectedDay: (dayIndex: number) => void;
}

export const useSelectedCityStore = create<CityState>((set) => ({
    selectedDay: 0,
    setSelectedDay: (dayIndex) => set({ selectedDay: dayIndex }),
}));
