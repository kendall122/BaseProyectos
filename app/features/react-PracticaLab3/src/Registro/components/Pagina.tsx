import { useRegistro } from "../hook/useContador";
import { ETIQUETAS } from "../Constants/constantes";
import { Formulario } from "./Formulario";
import { Contador } from "./Contador";
import { Lista } from "./Lista";

export function Pagina() {
  const {
    listaEstudiantes,
    mensaje,
    cantidadEstudiantesRegistrados,
    cuposDisponibles,
    agregarEstudiante,
  } = useRegistro();

  return (
    <div>
      <h1>{ETIQUETAS.TITULO}</h1>

      <Formulario alRegistrar={agregarEstudiante} mensaje={mensaje} />

      <Contador
        registrados={cantidadEstudiantesRegistrados}
        disponibles={cuposDisponibles}
      />

      <Lista estudiantes={listaEstudiantes} />
    </div>
  );
}