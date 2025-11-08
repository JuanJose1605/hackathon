import React from "react";
import { IonPage, IonIcon } from "@ionic/react";
import { chevronBackOutline } from "ionicons/icons";
import { useHistory } from "react-router-dom";

interface BaseLayout2Props {
  logo: string;
  bottomLeftImage?: string;
  bottomRightImage?: string;
  children?: React.ReactNode;
  backTo?: string; // 🔹 NUEVO: ruta a la que llevará la flecha
}

const BaseLayout2: React.FC<BaseLayout2Props> = ({
  logo,
  bottomLeftImage,
  bottomRightImage,
  children,
  backTo,
}) => {
  const history = useHistory();

  const handleGoBack = () => {
    if (backTo) history.push(backTo); // 🔹 si tiene destino definido
    else history.goBack();            // 🔹 si no, regresa por historial
  };

  return (
    <IonPage style={{ background: "#f0f0f0" }}>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#e9e9e9",
          paddingTop: "2vh",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "430px",
            height: "93vh",
            margin: "auto",
            marginTop: "1vh",
            borderRadius: "40px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
            backgroundColor: "#ffffff",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* 🔹 Flecha de retroceso */}
          <IonIcon
            icon={chevronBackOutline}
            onClick={handleGoBack}
            style={{
              position: "absolute",
              top: "18px",
              left: "18px",
              fontSize: "28px",
              color: "#000",
              cursor: "pointer",
              zIndex: 10,
            }}
          />

          {/* Logo */}
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "6px",
              paddingBottom: "6px",
            }}
          >
            <img
              src={logo}
              alt="Wilapp logo"
              style={{
                width: "230px",
                maxWidth: "78%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </div>

          {/* Contenido */}
          <div
            style={{
              flex: 1,
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0 22px 22px 22px",
            }}
          >
            {children}
          </div>

          {/* Imágenes decorativas */}
          {bottomLeftImage && (
            <img
              src={bottomLeftImage}
              alt="decor-left"
              className="decor-left"
              style={{
                position: "absolute",
                bottom: "-120px",
                left: "-30px",
                width: "44%",
                maxWidth: "220px",
                height: "auto",
                objectFit: "contain",
                transform: "rotate(340deg)",
                pointerEvents: "none",
                userSelect: "none",
              }}
            />
          )}

          {bottomRightImage && (
            <img
              src={bottomRightImage}
              alt="decor-right"
              className="decor-right"
              style={{
                position: "absolute",
                bottom: "20px",
                right: "-15px",
                width: "48%",
                maxWidth: "240px",
                height: "auto",
                objectFit: "contain",
                transform: "rotate(270deg)",
                pointerEvents: "none",
                userSelect: "none",
              }}
            />
          )}
        </div>
      </div>
    </IonPage>
  );
};

export default BaseLayout2;
