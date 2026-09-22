import useContador from "../hooks/useContador";
import {CONTADOR_TEXT} from "../constants/contador.constants";

export function Contador2({count, setCount}) {

  const { handleIncrement, handleDecrement } = useContador(setCount);

return (
    <>
      <h1>Contador2</h1>
      <p>{count} </p>
      <button onClick={handleDecrement} disabled={count <= 0}>
        Decrementar
      </button>
      
    </>
  );
};

export default Contador2;