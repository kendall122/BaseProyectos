import { useState, type FormEvent } from "react";
import { ETIQUETAS } from "../Constants/constantes";

type FormularioProps = {
  alRegistrar: (nombre: string) => void;
  mensaje: string;
};

export function Formulario({ alRegistrar, mensaje }: FormularioProps) {
  const [nombre, setNombre] = useState<string>("");

  const manejarEnvio = (evento: FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    alRegistrar(nombre);
    setNombre("");
  };

  return (
    <form onSubmit={manejarEnvio}>
      <input
        type="text"
        value={nombre}
        onChange={(evento) => setNombre(evento.target.value)}
        placeholder={ETIQUETAS.PLACEHOLDER_NOMBRE}
      />
      <button type="submit">{ETIQUETAS.BOTON_REGISTRAR}</button>
      {mensaje && <p>{mensaje}</p>}
    </form>
  );
}