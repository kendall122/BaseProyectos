import useContador from "../hooks/useContador";
import {CONTADOR_TEXT} from "../constants/contador.constants";

export function Contador1({count, setCount}) {

  const { handleIncrement, handleDecrement } = useContador(setCount);

return (
    <>
      <h1>Contador</h1>
      <p>{count} </p>
      <button onClick={count < 5 ? handleIncrement : null}>Incrementar</button>
      <button onClick={count > 0 ? handleDecrement : null}>Decrementar</button>
    </>
  );
};

export default Contador1;