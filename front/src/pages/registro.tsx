// src/pages/EmpresaForm.tsx
import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonText,
  IonSpinner,
  useIonRouter,
} from "@ionic/react";
import { useUserStore } from "../store/empresa.store";
import { InputCustomEvent, InputChangeEventDetail } from "@ionic/react";
import { useHistory } from "react-router";




export default function EmpresaForm() {
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
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Crear Empresa</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <form onSubmit={handleSubmit} style={{ padding: 16 }}>
          <IonList inset>
            <IonItem>
              <IonLabel position="stacked">NIT</IonLabel>
              <IonInput
                type="text"
                name="nit"
                value={formData.nit}
                onIonChange={handleIonChange("nit")}
                required
              />
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Nombre</IonLabel>
              <IonInput
                type="text"
                name="nombre"
                value={formData.nombre}
                onIonChange={handleIonChange("nombre")}
                required
              />
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Descripción</IonLabel>
              <IonInput
                type="text"
                name="descripcion"
                value={formData.descripcion}
                onIonChange={handleIonChange("descripcion")}
              />
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Email</IonLabel>
              <IonInput
                type="email"
                name="email"
                value={formData.email}
                onIonChange={handleIonChange("email")}
                required
              />
            </IonItem>


            <IonItem>
              <IonLabel position="stacked">Contraseña</IonLabel>
              <IonInput
                type="password"
                name="password"
                value={formData.password}
                onIonInput={(e) =>
                  setFormData((p) => ({ ...p, password: e.detail.value ?? "" }))
                }
                required
              />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Telefono</IonLabel>
              <IonInput
                type="text"
                name="telefono"
                value={formData.telefono}
                onIonChange={handleIonChange("telefono")}
                required
              />
            </IonItem>


          </IonList>
          <div style={{ padding: 16 }}>
            <IonButton expand="block" type="submit" color="primary">
              Crear Empresa
            </IonButton>
          </div>
          <IonButton routerLink="/login" color="secondary">
            Ir al otro layout
          </IonButton>



        </form>
      </IonContent>
    </IonPage>
  );
}
