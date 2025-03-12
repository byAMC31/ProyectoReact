import axios from "axios";
import Button from "../Button/Button";
import NavBar from "../NavBar/Navbar";


function Astros() {

    //Axios usando async-await
    const URL = "https://fakestoreapi.com/products";

    //Método get usando Axios y async-await
    async function getInfo(){
        try {
            const response = await axios.get(URL);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }


        return (
    <>
    <NavBar/>
            <h1>Astros</h1>

            <div className="card">
            <Button texto="Método Get" onClick={getInfo} />

            <button onClick={getInfo}>
                boton
            </button>

            
            </div>


    </>
        )
    }
    
    
    export default Astros;
    
    