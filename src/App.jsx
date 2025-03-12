import './App.css'
import Button from './components/Button/Button'
import BasicCard from './components/CardMui/Card'
import NavBar from './components/NavBar/Navbar'
import Products from './components/Products/Products'


function App() {
  const tenisMorados = `https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933`
  const tenisDark = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/241417/1.jpg?6747"
  const tenisCamel = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/4410121/1.jpg?4437"
  // creando objetos para estilos del div de MUI
  const stylesCard = {
    display:'flex',
    justifyContent: 'center',
    marginTop: '50px',
  }

  return (
    <>
      {/* Navbar */}
      <NavBar />


      {/* titulo h */}
      <h1>Vite + React</h1>

      {/* Products */}
      <Products
        image={tenisMorados}
        title="Tenis morados"
        description='Tenis aerodinamicos para correr'
        price='2599.90'
        alt='tenis-morados'
      />

      <Products
        image={tenisDark}
        title="Tenis negros"
        description='Tenis negros aerodinamicos para correr'
        price='2599.90'
        alt='tenis-negros'
      />

      <Products
        image={tenisCamel}
        title="Tenis camel"
        description='Tenis camel elegantes'
        price='2150.90'
        alt='tenis-camel'
      />

      {/* Aplicando estilos en linea */}
      <h2 style={{ color: "#94bbe9", fontSize: 28, border: "1px solid white", borderRadius: "18px" }}>
        Material UI - Components</h2>
      <br />


      <div style={stylesCard}>
        <BasicCard 
        title="Parque nacional Yosemite"
        date="25 de marzo al 29 de marzo"
        price="65000.20"
        image= "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
        />
      </div>

      <div style={stylesCard}>
        <BasicCard 
        title="Bosque de chapultepec"
        date="25 de marzo al 29 de marzo"
        price="1200.20"
        image= "https://www.mexicoescultura.com/galerias/espacios/principal/bosque.jpg"
        />
      </div>

    
      <div style={stylesCard}>
        <BasicCard 
        title="Castillo de chapultepec"
        date="25 de marzo al 29 de marzo"
        price="600.20"
        image= "https://www.eluniversal.com.mx/sites/default/files/2017/03/28/5secretosquedebesconocerdelbosquedechapultepec.jpg"
        />
      </div>








      {/* {/*div para boton*/}
      {/* <div className="card">
        <Button texto="Buscar"/>
      </div>

        <Button texto="Inciar sesión"/>  */}

    </>
  )
}

export default App
