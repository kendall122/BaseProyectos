import { ETIQUETAS } from "../Constants/constantes";

type ContadorProps = {
  registrados: number;
  disponibles: number;
};

export function Contador({ registrados, disponibles }: ContadorProps) {
  return (
    <div>
      <p>{ETIQUETAS.REGISTRADOS}: {registrados}</p>
      <p>{ETIQUETAS.CUPOS_DISPONIBLES}: {disponibles}</p>
    </div>
  );
}