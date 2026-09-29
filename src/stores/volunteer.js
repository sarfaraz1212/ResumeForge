import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const initialState = {
    volunteers: [],
};

const useVolunteerStore = create(
    persist(
        (set) => ({
            ...initialState,
            setVolunteers: (volunteers) => set({ volunteers }),
            addVolunteer: (entry) =>
                set((state) => ({ volunteers: [...state.volunteers, entry] })),
            updateVolunteer: (index, field, value) =>
                set((state) => ({
                    volunteers: state.volunteers.map((item, i) =>
                        i === index ? { ...item, [field]: value } : item
                    ),
                })),
            removeVolunteer: (index) =>
                set((state) => ({
                    volunteers: state.volunteers.filter((_, i) => i !== index),
                })),
            reset: () => set(initialState),
        }),
        { name: "rb-volunteer" }
    )
);

export default useVolunteerStore;
