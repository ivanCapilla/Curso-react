// import { Saludo } from "./Saludo";
// import { Estilos } from "./Estilos";
// import { Eventos } from "./Eventos";
// import { Posts } from "./Posts";
import { useState } from "react";

function App() {
  function counter() {
    const [contador, setContador] = useState(0);
    
    return (
      <div>
        <h1>Counter: {contador}</h1>
        <button onClick={() => {
            setContador(contador +1)
        }}>Increment</button>
      </div>
    );
  }
  return <>{counter()}</>;
}

export default App;
