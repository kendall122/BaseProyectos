import { useState } from "react";

export function LayoutContador() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((prev) => prev + 1);
  }
  function handleDecrement() {
    setCount((prev) => prev - 1);
  }

  return (
    <>
      <h1>Contador</h1>
      <p>{count} </p>
      <button onClick={count < 5 ? handleIncrement : null}>Incrementar</button>
      <button onClick={count > 0 ? handleDecrement : null}>Decrementar</button>
    </>
  );
}
