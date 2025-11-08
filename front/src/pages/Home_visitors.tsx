// src/pages/Home_visitors.tsx
import React from "react";
import BaseLayout1 from "../components/BaseLayout1";

// ...importaciones
import { useHistory } from "react-router-dom";

const Home_visitors: React.FC = () => {
  const history = useHistory();

  const empresas = [
    {
      nombre: "Shalena Chocolatería",
      descripcion:
        "Chocolate artesanal hecho con el mejor cacao huilense. Tradición, sabor y corazón en cada bocado...",
      imagen: "/imagenes/shalena.png",
      logo: "/imagenes/shalena.png",
      slug: "shalena",
    },
    {
      nombre: "Huellitas Saludables",
      descripcion:
        "Snacks y comida natural para perros, elaborada con amor y productos locales...",
      imagen: "/imagenes/huellitas.png",
      logo: "/imagenes/huellitas.png",
      slug: "huellitas",
    },
    {
      nombre: "Charms Beauty",
      descripcion:
        "Accesorios y productos de belleza que realzan tu estilo con un toque moderno y auténtico...",
      imagen: "/imagenes/charns.PNG",
      logo: "/imagenes/charns.PNG",
      slug: "charms",
    },
    {
      nombre: "Herbolaria Ancestral",
      descripcion:
        "Productos naturales a base de hierbas del Huila. Bienestar y armonía desde la naturaleza...",
      imagen: "/imagenes/herbolaria.png",
      logo: "/imagenes/herbolaria.png",
      slug: "herbolaria",
    },
  ];

  const goToProducts = (empresa: any) => {
    history.push("/list_products", { empresa }); // 🔹 pasamos la empresa por state
  };

  return (
    <BaseLayout1
      image="/imagenes/logo2.png"
      title="Wilapp"
      description="Donde el talento huilense se encuentra con el mundo"
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0.5rem 0.4rem 1rem 0.4rem",
          boxSizing: "border-box",
        }}
      >
        {empresas.map((e, i) => (
          <div
            key={i}
            style={{
              width: "92%",
              maxWidth: 370,
              margin: "0 auto 12px",
              display: "flex",
              alignItems: "center",
              background: "#fff",
              borderRadius: "16px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              padding: "10px 14px",
              boxSizing: "border-box",
            }}
          >
            {/* Imagen circular con click */}
            <div
              onClick={() => goToProducts(e)}
              style={{
                width: 65,
                height: 65,
                borderRadius: "50%",
                overflow: "hidden",
                border: "2px solid #000",
                marginRight: 14,
                background: "#f5f5f5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              title="Ver productos"
            >
              <img
                src={e.imagen}
                alt={e.nombre}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* Texto */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <h3
                style={{
                  margin: 0,
                  fontSize: "1.05rem",
                  color: "#040404",
                  fontWeight: 800,
                  lineHeight: 1.1,
                }}
              >
                {e.nombre}
              </h3>
              <p
                style={{
                  margin: "4px 0 0 0",
                  fontSize: "0.9rem",
                  color: "#333",
                  lineHeight: 1.35,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical" as any,
                  wordBreak: "break-word",
                }}
              >
                {e.descripcion}
              </p>
            </div>
          </div>
        ))}
      </div>
    </BaseLayout1>
  );
};

export default Home_visitors;
