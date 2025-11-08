import { create } from "zustand";
import { axiosClient } from "../services/axios.service";

type EmpresaMin = { nit?: string; nombre?: string; email?: string };
type AuthState = {
  token: string | null;
  empresa: EmpresaMin | null;
  mensaje: string | null;
  loading: boolean;
  error: string | null;

  login: (nombre: string, password: string) => Promise<void>;
  logout: () => void;
  hydrate: () => void; // restaura sesión al recargar
};

export const useAuthStore = create<AuthState>((set, get) => ({
  token: null,
  empresa: null,
  mensaje: null,
  loading: false,
  error: null,

  hydrate: () => {
    const token = localStorage.getItem("token");
    const empresa = localStorage.getItem("empresa");
    if (token) {
      set({ token, empresa: empresa ? JSON.parse(empresa) : null });
      // Adjunta el token para siguientes requests (si no usas interceptor)
      axiosClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  },

  login: async (nombre, password) => {
    set({ loading: true, error: null });
    try {
      const { data } = await axiosClient.post("/empresa/inicio", { nombre, password });
      // Backend: { token, mensaje, empresa }
      const { token, mensaje, empresa } = data;

      set({ token, empresa, mensaje, loading: false });
      localStorage.setItem("token", token);
      localStorage.setItem("empresa", JSON.stringify(empresa || {}));

      // Para que todas las peticiones lleven el token (si no usas interceptor)
      axiosClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } catch (e: any) {
      const msg = e?.response?.data?.message || "Error al iniciar sesión";
      set({ error: msg, loading: false });
      throw e;
    }
  },

  logout: () => {
    set({ token: null, empresa: null, mensaje: null });
    localStorage.removeItem("token");
    localStorage.removeItem("empresa");
    delete axiosClient.defaults.headers.common["Authorization"];
  },
}));
