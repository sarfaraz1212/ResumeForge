import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const initialState = {
    awards: [
        {
            title: "Award Title",
            awarder: "Awarder",
            date: "",
            summary: "",
        },
    ],
};

const useAwardsStore = create(
    persist(
        (set) => ({
            ...initialState,
            setAwards: (awards) => set({ awards }),
            addAward: (entry) =>
                set((state) => ({ awards: [...state.awards, entry] })),
            updateAward: (index, field, value) =>
                set((state) => ({
                    awards: state.awards.map((item, i) =>
                        i === index ? { ...item, [field]: value } : item
                    ),
                })),
            removeAward: (index) =>
                set((state) => ({
                    awards: state.awards.filter((_, i) => i !== index),
                })),
            reset: () => set(initialState),
        }),
        { name: "rb-awards" }
    )
);

export default useAwardsStore;
