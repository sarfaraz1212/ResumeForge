import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const initialState = {
    references: [
        {
            name: "Reference Name",
            role: "Role",
            phone: "",
            email: "",
        },
    ],
};

const useReferencesStore = create(
    persist(
        (set) => ({
            ...initialState,
            setReferences: (references) => set({ references }),
            addReference: (entry) =>
                set((state) => ({ references: [...state.references, entry] })),
            updateReference: (index, field, value) =>
                set((state) => ({
                    references: state.references.map((item, i) =>
                        i === index ? { ...item, [field]: value } : item
                    ),
                })),
            removeReference: (index) =>
                set((state) => ({
                    references: state.references.filter((_, i) => i !== index),
                })),
            reset: () => set(initialState),
        }),
        { name: "rb-references" }
    )
);

export default useReferencesStore;
