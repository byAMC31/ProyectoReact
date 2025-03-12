
// Crear un componente Button
// Importar estilos
import './Button.css' //-> actualización 


//Props estructurados 'props'


//export default function Button() {
// function Button(props) {
// //const Button = () =>{ }
//     return (

//         <button onClick={onClick}>
//             { props.texto }
//         </button>

//     )
// }
function Button({ texto, onClick }) {
    return (
        <button onClick={onClick}>
            {texto}
        </button>
    );
}


export default Button;



