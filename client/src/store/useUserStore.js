import { create } from 'zustand';

const useUserStore = create((set) => ({
    isAuth: true,
    user: {},

    setIsAuth: (bool) => set({ isAuth: bool }),
    setUser: (user) => set({ user }),
}))

export { useUserStore };
