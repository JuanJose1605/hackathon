// src/pages/Profile_entrepreneur.tsx
import React from "react";
import { IonIcon } from "@ionic/react";
import { createOutline } from "ionicons/icons";
import BaseLayout1 from "../components/BaseLayout1";

const Profile_entrepreneur: React.FC = () => {
  return (
    <BaseLayout1
      image="/imagenes/logo2.png"
      title="Wilapp"
      description="Donde el talento huilense se encuentra con el mundo"
    >
      <div
        style={{
          width: "100%",
          maxWidth: 380,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0.6rem 1rem 1.4rem",
          boxSizing: "border-box",
        }}
      >
        {/* Imagen del negocio */}
        <div
          style={{
            width: 150,
            height: 150,
            borderRadius: "50%",
            border: "2px solid #000",
            overflow: "hidden",
            background: "#f5f5f5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "0.4rem",
            marginBottom: "0.6rem",
          }}
        >
          <img
            src="/imagenes/huellitas.png"
            alt="Huellitas saludables"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* Título */}
        <h3
          style={{
            margin: "0 0 0.6rem 0",
            fontWeight: 800,
            color: "#111",
            fontSize: "1.1rem",
          }}
        >
          Perfil , negocio
        </h3>

        {/* Formulario vacío */}
        <div style={{ width: "100%", display: "grid", gap: 14 }}>
          {[
            "Código NIT",
            "Nombre de empresa",
            "Descripción",
            "Correo electrónico",
            "Contraseña",
            "Contacto Whatsapp",
          ].map((label, idx) => (
            <div
              key={idx}
              style={{
                position: "relative",
                width: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <input
                type={
                  label === "Contraseña"
                    ? "password"
                    : label === "Correo electrónico"
                    ? "email"
                    : "text"
                }
                placeholder={label}
                style={{
                  width: "100%",
                  padding: "12px 46px 12px 14px",
                  borderRadius: 12,
                  border: "2px solid #000",
                  background: "#fff",
                  color: "#111",
                  outline: "none",
                  fontSize: "1rem",
                  height: 44,
                }}
              />
              <IonIcon
                icon={createOutline}
                style={{
                  position: "absolute",
                  right: 10,
                  fontSize: 24,
                  color: "#111",
                  opacity: 0.9,
                }}
              />
            </div>
          ))}
        </div>

        {/* Botón guardar */}
        <button
          style={{
            width: "100%",
            padding: "14px 16px",
            border: "none",
            borderRadius: 12,
            background: "#000",
            color: "#fff",
            fontWeight: 800,
            fontSize: "1rem",
            marginTop: "22px",
            boxShadow: "0 10px 24px rgba(0,0,0,0.18)",
            cursor: "pointer",
          }}
        >
          Guardar cambios
        </button>
      </div>
    </BaseLayout1>
  );
};

export default Profile_entrepreneur;
