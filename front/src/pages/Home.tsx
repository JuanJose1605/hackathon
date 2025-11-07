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
} from "@ionic/react";
import { useUserStore } from "../store/empresa.store";


type Form = {
  nit: string;
  nombre: string;
  descripcion: string;
  email: string;
  password: string;
};

export default function EmpresaForm() {
  const { user, setUser } = useUserStore();
  const [form, setForm] = useState<Form>({
    nit: "",
    nombre: "",
    descripcion: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Helper para actualizar campos de IonInput
  const update = (key: keyof Form) => (e: CustomEvent) => {
    const value = (e as CustomEvent<{ value: string | null }>).detail.value ?? "";
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await setUser({
        nit: form.nit,
        nombre: form.nombre,
        descripcion: form.descripcion,
        email: form.email,
        password: form.password,
      });
    } catch (err: any) {
      setError(err?.message ?? "Error al crear la empresa");
    } finally {
      setLoading(false);
    }
  };

  const canSubmit =
    form.nit && form.nombre && form.descripcion && form.email && form.password;

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
                value={form.nit}
                onIonChange={update("nit")}
                required
                placeholder="123456789-0"
              />
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Nombre</IonLabel>
              <IonInput
                value={form.nombre}
                onIonChange={update("nombre")}
                required
              />
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Descripción</IonLabel>
              <IonInput
                value={form.descripcion}
                onIonChange={update("descripcion")}
                required
              />
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Correo</IonLabel>
              <IonInput
                type="email"
                value={form.email}
                onIonChange={update("email")}
                required
              />
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Contraseña</IonLabel>
              <IonInput
                type="password"
                value={form.password}
                onIonChange={update("password")}
                required
              />
            </IonItem>
          </IonList>

          <div style={{ display: "flex", gap: 12, padding: "0 12px", marginTop: 12 }}>
            <IonButton type="submit" expand="block" disabled={!canSubmit || loading}>
              {loading ? <IonSpinner name="dots" /> : "Guardar"}
            </IonButton>
          </div>

          {error && (
            <IonText color="danger" style={{ display: "block", padding: 12 }}>
              {error}
            </IonText>
          )}

          {user && (
            <pre style={{ padding: 12, whiteSpace: "pre-wrap" }}>
              {JSON.stringify(user, null, 2)}
            </pre>
          )}
        </form>
      </IonContent>
    </IonPage>
  );
}
