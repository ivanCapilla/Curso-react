import './estilos.css'
export function Estilos(){
    const cardStyles = {
        background : '#202020',
        color : 'white'
    }

    return <div style={{color: 'red'}}>
        <h2> Este h2 esta estilado con entrada en linea o directo debe de llevar dos llaves</h2>
        <p style={cardStyles}>  este es un parrafo con estilos con estrada por objeto </p>
        <p className = 'estilizado'> este es un parrafo estilado con archivo css </p>
    </div>
}