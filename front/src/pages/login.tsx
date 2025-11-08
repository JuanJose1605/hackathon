// src/pages/Login.tsx
import React, { useEffect, useState } from "react";
import { useAuthStore } from "../store/useAuth.store";
import BaseLayout2 from "../components/BaseLayout2";
import { useHistory } from "react-router";


export default function Login() {
  const { login, hydrate, loading, error, mensaje } = useAuthStore();
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
   const history = useHistory();

  useEffect(() => {
    hydrate();

    // Si ya hay token, redirige automáticamente
    if (localStorage.getItem("token")) {
      history.push("/inicio");
    }
  }, [hydrate, history]);

  // 🔹 Este es tu onSubmit
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(nombre, password); // Llama al backend con /empresa/inicio
      history.push("/inicio"); // Redirige si es exitoso ✅
    } catch (error) {
      console.error("Error durante el inicio de sesión:", error);
    }
  };

 

  const handleRegisterClick = () => {
    history.push("/register_entrepreneurs"); // 🔹 Navegar al registro
  };

  return (
    <BaseLayout2 
    logo="/imagenes/logo.png"
      bottomLeftImage="/imagenes/estatua.png"
      bottomRightImage="/imagenes/cafe.png"
      backTo="/home" >
    <form onSubmit={onSubmit} className="login-container">
        <h2 className="login-title">Iniciar sesión</h2>
        <p className="login-subtitle">
          Ingresa tu usuario y contraseña para ingresar
        </p>

        <input
          placeholder="Nombre de empresa"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* 🔹 Este botón envía el formulario automáticamente */}
        <button disabled={loading} type="submit">
          {loading ? "Ingresando..." : "Continuar"}
        </button>

        <button
          type="button"
          className="login-btn login-btn--secondary"
          onClick={handleRegisterClick}
        >
          Registrate
        </button>

        <p className="login-terms">
          Al hacer clic en continuar, aceptas nuestros{" "}
          <strong>Términos de servicio</strong> y{" "}
          <strong>Política de privacidad</strong>.
        </p>

        {mensaje && <p style={{ color: "green" }}>{mensaje}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    
    </BaseLayout2>
  );
}
