import React from "react";
import { IonPage, IonIcon } from "@ionic/react";
import { chevronBackOutline } from "ionicons/icons"; // 🔹 importamos la flecha
import { useHistory } from "react-router-dom";       // 🔹 para volver atrás

interface BaseLayoutProps {
    image?: string;
    title: string;
    description: string;
    children?: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({
    image,
    title,
    description,
    children,
}) => {
    const history = useHistory();

    const handleGoBack = () => {
        history.goBack(); // 🔹 vuelve a la ruta anterior
    };

    return (
        <IonPage style={{ background: "#a8aaa9ff" }}>
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
                {/* Rectángulo tipo celular */}
                <div
                    style={{
                        width: "100%",
                        maxWidth: "430px",
                        height: "93vh",
                        margin: "auto",
                        marginTop: "1vh",
                        borderRadius: "40px",
                        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                        overflow: "hidden",
                        backgroundColor: "#fdfcfcff",
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

                    {/* Header */}
                    <div
                        style={{
                            width: "100%",
                            padding: "1.8rem 1.2rem 1rem 1.2rem",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "1.2rem",
                                width: "90%",
                            }}
                        >
                            {/* Logo */}
                            {image && (
                                <div
                                    style={{
                                        width: "140px",
                                        height: "140px",
                                        borderRadius: "50%",
                                        border: "3px solid #000",
                                        overflow: "hidden",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        backgroundColor: "#fff",
                                    }}
                                >
                                    <img
                                        src={image}
                                        alt="logo"
                                        style={{
                                            width: "90%",
                                            height: "90%",
                                            objectFit: "contain",
                                        }}
                                    />
                                </div>
                            )}

                            {/* Bloque centrado */}
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flex: 1,
                                    textAlign: "center",
                                    transform: "translateX(-23px)",
                                }}
                            >
                                <h1
                                    style={{
                                        fontSize: "2rem",
                                        fontWeight: 800,
                                        color: "#2e6e2f",
                                        margin: 0,
                                        lineHeight: 1.1,
                                    }}
                                >
                                    {title}
                                </h1>
                                <p
                                    style={{
                                        marginTop: "0.4rem",
                                        fontSize: "1rem",
                                        color: "#111",
                                        fontWeight: 500,
                                        lineHeight: 1.3,
                                    }}
                                >
                                    {description}
                                </p>
                            </div>
                        </div>

                        {/* Línea divisoria */}
                        <div
                            style={{
                                width: "72%",
                                height: "2px",
                                backgroundColor: "#000",
                                margin: "1.2rem auto 0 auto",
                                transform: "translateX(-10px)",
                            }}
                        />
                    </div>

                    {/* Contenido inferior */}
                    <div
                        style={{
                            flex: 1,
                            width: "100%",
                            overflowY: "auto",
                            padding: "0 1rem 1rem 1rem",
                        }}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </IonPage>
    );
};

export default BaseLayout;
