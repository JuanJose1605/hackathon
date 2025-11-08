// EnterLayout.tsx
import React, { ReactNode } from "react";
import { IonPage } from "@ionic/react";

interface EnterLayoutProps {
  children: ReactNode;
  background?: string; // imagen de fondo dinámica
}

const EnterForm: React.FC<EnterLayoutProps> = ({ children, background }) => {
  return (
    <IonPage style={{ background: "#aaa8a8ff" }}>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#e9e9e9",
          paddingTop: "2vh",   // 🔹 lo baja un poco
          paddingBottom: "0vh" // 🔹 controla espacio inferior
        }}
      >

        <div
          style={{
            width: "100%",
            maxWidth: "430px",
            height: "93vh",
            margin: "auto",
            marginTop: "1vh", // 🔹 súbelo o bájalo (usa valores positivos o negativos)
            borderRadius: "40px",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
            backgroundImage: `url(${background || "/assets/hamburguesa.png"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            backgroundBlendMode: "darken",
            transition: "background-image 0.5s ease-in-out",
          }}
        >

          {children}
        </div>
      </div>
    </IonPage>
  );
};

export default EnterForm;
