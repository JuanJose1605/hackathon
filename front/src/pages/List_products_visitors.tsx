// src/pages/list_products_visitors.tsx
import React, { useMemo } from "react";
import { useLocation, useHistory } from "react-router-dom";
import BaseLayout1 from "../components/BaseLayout1";
import "../theme/Login.css"; // para reutilizar .login-btn

type Empresa = {
  nombre: string;
  descripcion: string;
  logo: string;
  imagen?: string;
  slug?: string;
};

type Producto = {
  nombre: string;
  imagen: string;
};

const ListProductsVisitors: React.FC = () => {
  const location = useLocation<{ empresa?: Empresa }>();
  const history = useHistory();
  const empresa = location.state?.empresa;

  // ✅ Si no viene empresa por state (acceso directo), puedes redirigir o mostrar fallback
  if (!empresa) {
    // Opcional: history.replace("/home_visitors");
    // return null;
  }

  // 🔹 Mock de productos por empresa (puedes cambiarlos luego)
  const productosPorEmpresa: Record<string, Producto[]> = useMemo(
    () => ({
      "Shalena Chocolatería": [
        { nombre: "Tableta 70% Cacao", imagen: "/imagenes/prod_choco1.png" },
        { nombre: "Bombones Surtidos", imagen: "/imagenes/prod_choco2.png" },
        { nombre: "Cacao en polvo", imagen: "/imagenes/prod_choco3.png" },
      ],
      "Huellitas Saludables": [
        { nombre: "Galletas de pollo", imagen: "/imagenes/prod_huellas1.png" },
        { nombre: "Snacks de res", imagen: "/imagenes/prod_huellas2.png" },
        { nombre: "Bocaditos mixtos", imagen: "/imagenes/prod_huellas3.png" },
      ],
      "Charms Beauty": [
        { nombre: "Set de collares", imagen: "/imagenes/prod_charms1.png" },
        { nombre: "Aretes minimal", imagen: "/imagenes/prod_charms2.png" },
        { nombre: "Kit belleza", imagen: "/imagenes/prod_charms3.png" },
      ],
      "Herbolaria Ancestral": [
        { nombre: "Té de hierbas", imagen: "/imagenes/prod_herbo1.png" },
        { nombre: "Ungüento natural", imagen: "/imagenes/prod_herbo2.png" },
        { nombre: "Aceite esencial", imagen: "/imagenes/prod_herbo3.png" },
      ],
    }),
    []
  );

  const productos = productosPorEmpresa[empresa?.nombre || "Shalena Chocolatería"] || [];

  const verDetalle = (p: Producto) => {
    // Aquí puedes navegar a /product_detail y pasar el producto
    // history.push("/product_detail", { producto: p, empresa });
    alert(`Ver detalle: ${p.nombre}`);
  };

  return (
    <BaseLayout1
      image={empresa?.logo || "/imagenes/logo2.png"} // logo grande arriba
      title={empresa?.nombre || "Wilapp"}
      description={empresa?.descripcion || "Descubre los productos destacados"}
    >
      {/* Listado de productos */}
      <div
        style={{
          width: "100%",
          display: "grid",
          placeItems: "center",
          gap: 12,
          padding: "0.5rem 0 1rem 0",
          boxSizing: "border-box",
        }}
      >
        {productos.map((p, idx) => (
          <div
            key={idx}
            style={{
              width: "92%",
              maxWidth: 370,
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              background: "#fff",
              borderRadius: 16,
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              padding: "10px 12px",
              boxSizing: "border-box",
              gap: 12,
            }}
          >
            {/* Imagen producto */}
            <div
              style={{
                width: 68,
                height: 68,
                borderRadius: 12,
                overflow: "hidden",
                border: "2px solid #000",
                background: "#f5f5f5",
                flexShrink: 0,
              }}
            >
              <img
                src={p.imagen}
                alt={p.nombre}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* Nombre + botón */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <h4
                style={{
                  margin: 0,
                  fontSize: "1rem",
                  color: "#111",
                  fontWeight: 800,
                  lineHeight: 1.15,
                }}
              >
                {p.nombre}
              </h4>

              <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
                <button
                  className="login-btn login-btn--secondary"
                  style={{
                    width: "auto",
                    padding: "10px 14px",
                    fontSize: "0.95rem",
                  }}
                  onClick={() => verDetalle(p)}
                >
                  Ver detalle
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </BaseLayout1>
  );
};

export default ListProductsVisitors;
