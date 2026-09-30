import { useState } from "react";
import {MAX_CUPOS, MENSAJES } from "../Constants/constantes";

export function useRegistro() {
  const [listaEstudiantes, setListaEstudiantes] = useState<string[]>([]);
  const [mensaje, setMensaje] = useState<string>("");
  const cantidadEstudiantesRegistrados = listaEstudiantes.length;
  const cuposDisponibles = MAX_CUPOS - cantidadEstudiantesRegistrados;

  const agregarEstudiante = (estudiante: string) => {
    const nombreLimpio = estudiante.trim();
    
     if (nombreLimpio === "") {
      setMensaje(MENSAJES.NOMBRE_VACIO);
      return;
    }

    if (cuposDisponibles === 0) {
      setMensaje(MENSAJES.LISTA_LLENA);
      return;
    }

    setListaEstudiantes([...listaEstudiantes, nombreLimpio]);
    setMensaje(MENSAJES.ESTUDIANTE_AGREGADO);
  };

  return {
    listaEstudiantes,
    mensaje,
    cantidadEstudiantesRegistrados,
    cuposDisponibles,
    agregarEstudiante,
  };
}
