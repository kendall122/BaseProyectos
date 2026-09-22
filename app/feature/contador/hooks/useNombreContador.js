import { useState } from "react";
import useContador from "./useContador";

function useNombreContador(setCount) {
  const [name, setName] = useState("");
  const [edad, setEdad] = useState("");
  const { handleIncrement } = useContador(setCount);

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEdadChange(event) {
    setEdad(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter" && name.trim() !== "" && edad !== "") {
      handleIncrement();
      setName("");
      setEdad("");
    }
  }

  return { name, handleNameChange, edad, handleEdadChange, handleKeyDown };
}

export default useNombreContador;
