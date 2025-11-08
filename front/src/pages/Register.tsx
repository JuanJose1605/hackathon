import React, { useState } from "react";
import { useHistory } from "react-router-dom"; // 🔹 Importar para redirigir
import "../theme/Login.css";
import BaseLayout2 from "../components/BaseLayout2";
import { useUserStore } from "../store/empresa.store";
import { InputChangeEventDetail, InputCustomEvent, IonButton, IonInput } from "@ionic/react";

const Register: React.FC = () => {
  const { setUser } = useUserStore();
  const history = useHistory();

  const [formData, setFormData] = useState({
    nit: "",
    nombre: "",
    descripcion: "",
    email: "",
    password: "",
    telefono: "",
  });

  const handleIonChange =
    (key: keyof typeof formData) =>
      (e: InputCustomEvent<InputChangeEventDetail>) => {
        setFormData((prev) => ({ ...prev, [key]: e.detail.value ?? "" }));
      };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await setUser(formData);
      alert("empresa creadacon éxito");
      // puedes redirigir o limpiar el formulario si quieres
    } catch (error) {
      alert("Error al crear la empresa");
    }
  };

  return (
    <BaseLayout2
      logo="/imagenes/logo.png"
      bottomLeftImage="/imagenes/estatua.png"
      bottomRightImage="/imagenes/cafe.png"
      backTo="/login" // 🔹 Flecha también lleva al login
    >
      <form className="login-container" onSubmit={handleSubmit}>
        
        <IonInput
          type="text"
          name="nit"
          value={formData.nit}
          onIonChange={handleIonChange("nit")}
          required
          placeholder="Código NIT"
          className="login-input"
        />
        <IonInput
          type="text"
          name="nombre"
          value={formData.nombre}
          onIonChange={handleIonChange("nombre")}
          required
          placeholder="Nombre de empresa"
          className="login-input"
        />

        <IonInput
          type="text"
          name="descripcion"
          value={formData.descripcion}
          onIonChange={handleIonChange("descripcion")}
          placeholder="Descripción"
          className="login-input"
          
        />
        <IonInput
          type="email"
          name="email"
          value={formData.email}
          onIonChange={handleIonChange("email")}
          required
          placeholder="Correo electrónico"
          className="login-input"
        />

        <IonInput
          type="password"
          name="password"
          value={formData.password}
          onIonInput={(e) =>
            setFormData((p) => ({ ...p, password: e.detail.value ?? "" }))
          }
          required
          placeholder="Contraseña"
          className="login-input"
        />
        <IonInput
          type="text"
          name="telefono"
          value={formData.telefono}
          onIonChange={handleIonChange("telefono")}
          required
          placeholder="telefono"
          className="login-input"
        />
        <IonButton expand="block" type="submit" color="primary">
          Crear Empresa
        </IonButton>


        {/* Botón principal */}
        {/* <button
          className="login-btn login-btn--primary"
          onClick={handleRegisterClick} // 🔹 Acción de registro
        >
          Registrarse
        </button> */}

        {/* Términos */}
        <p className="login-terms">
          Al registrarte, aceptas nuestros{" "}
          <strong>Términos de servicio</strong> y{" "}
          <strong>Política de privacidad</strong>.
        </p>
      </form>
    </BaseLayout2>
  );
};

export default Register;
