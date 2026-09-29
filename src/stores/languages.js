import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const initialState = {
    languages: [
        {
            name: "Language",
            level: "Level",
        },
    ],
};

const useLanguagesStore = create(
    persist(
        (set) => ({
            ...initialState,
            setLanguages: (languages) => set({ languages }),
            addLanguage: (entry) =>
                set((state) => ({ languages: [...state.languages, entry] })),
            updateLanguage: (index, field, value) =>
                set((state) => ({
                    languages: state.languages.map((item, i) =>
                        i === index ? { ...item, [field]: value } : item
                    ),
                })),
            removeLanguage: (index) =>
                set((state) => ({
                    languages: state.languages.filter((_, i) => i !== index),
                })),
            reset: () => set(initialState),
        }),
        { name: "rb-languages" }
    )
);

export default useLanguagesStore;
