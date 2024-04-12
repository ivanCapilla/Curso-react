import { Saludo } from "./Saludo";
import { Estilos } from "./Estilos";
import { Eventos } from "./Eventos";
import { Posts } from "./Posts"

function App(){
    
    return(
    <>
        <h1>Curso react de Iván 2024</h1>
        <Saludo titulo = 'Hola Prro este es un componente con props'/>
        <Estilos/>
        <Eventos/>
        <Posts/>
    </>
    )
}

export default App;