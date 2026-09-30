import { ETIQUETAS } from "../Constants/constantes";

type ListaProps = {
  estudiantes: string[];
};

export function Lista({ estudiantes }: ListaProps) {
  if (estudiantes.length === 0) {
    return <p>{ETIQUETAS.LISTA_SIN_ESTUDIANTES}</p>;
  }

  return (
    <div>
      <h2>{ETIQUETAS.TITULO_LISTA}</h2>
      <ul>
        {estudiantes.map((estudiante, indice) => (
          <li key={indice}>{estudiante}</li>
        ))}
      </ul>
    </div>
  );
}