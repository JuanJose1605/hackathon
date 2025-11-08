import React from "react";
import { useHistory } from "react-router-dom";

import "../theme/Enter.css"; // importamos el CSS de los botones
import EnterForm from "../components/EnterForm";

const Enter: React.FC = () => {
  const history = useHistory(); // Hook de navegación

  const handleVisitanteClick = () => {
    history.push("/home_visitors"); // Redirige al Home de visitantes
  };

  const handleEmprendedorClick = () => {
    history.push("/login"); // 🔹 Redirige al login de emprendedores
  };

  return (
    <EnterForm background="/imagenes/entrar.png">
      <div className="enter-content">
        <div className="button-container">
          <button
            className="enter-button visitante"
            onClick={handleVisitanteClick}
          >
            Visitante
          </button>

          <button
            className="enter-button emprendedor"
            onClick={handleEmprendedorClick}
          >
            Emprendedor
          </button>
        </div>
      </div>
    </EnterForm>
  );
};

export default Enter;
