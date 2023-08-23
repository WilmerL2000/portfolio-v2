import { create } from 'zustand';
import { persist, createJSONStorage } from "zustand/middleware";


interface ThemeStore {
    theme: string;
    setTheme: (theme: string) => void;

}

const useTheme = create(
    persist<ThemeStore>((set) => ({
        theme: 'light',
        setTheme: (theme: string) => set({ theme: theme }),
    }),
        {
            name: 'theme-storage',
            storage: createJSONStorage(() => localStorage)
        }
    )
)

export default useTheme;