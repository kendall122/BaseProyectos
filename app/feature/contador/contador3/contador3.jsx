import useNombreContador from "../hooks/useNombreContador";
import { CONTADOR_TEXT } from "../constants/contador.constants";

export function Contador3({ count, setCount }) {
  const { name, handleNameChange, edad, handleEdadChange, handleKeyDown } =
    useNombreContador(setCount);

  return (
    <div>
      <p>{CONTADOR_TEXT.INCREMENT}: {count}</p>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        onKeyDown={handleKeyDown}
        placeholder="Escribe un nombre"
      />
       <input
        type="number"
        value={edad}
        onChange={handleEdadChange}
        onKeyDown={handleKeyDown}
        placeholder="Escribe una edad"  
      />
    </div>
    
  );
}

export default Contador3;
