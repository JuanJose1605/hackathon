// src/store/useEmpresaStore.ts
import { create } from "zustand";
import { axiosClient } from "../services/axios.service";


interface User {
    nit: string;
    nombre: string;
    descripcion: string;
    imageUrl: string;
    email: string;
    password: string;
    createAt?: Date;
    updateAt?: Date;
}

type Store = {
    user: User | null;
    setUser: (newUser: Omit<User,  "imageUrl" | "createAt" | "updateAt">) => Promise<void>;
}

export const useUserStore = create<Store>()((set) => ({
    user: null,
    setUser: async (newUser) => {
        try {
            const { data } = await axiosClient.post<User>('/empresa', newUser);
            set({ user: data });
            console.log("empresa creada:", data);
        } catch (e) {
            console.error("Error al crear la empresa:", e);
        }
    }
}));
