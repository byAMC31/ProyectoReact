import { useState, useEffect } from 'react';

function Carrusel({ imagenes = [] }) {
  const [indice, setIndice] = useState(0);

  if (!imagenes.length) {
    return <p>No hay imágenes disponibles</p>;
  }

  // Función para avanzar
  const siguiente = () => {
    setIndice((indice + 1) % imagenes.length);
  };

  // Función para retroceder
  const anterior = () => {
    setIndice((indice - 1 + imagenes.length) % imagenes.length);
  };

  // Efecto para el slideshow automático cada 3 segundos
  useEffect(() => {
    const intervalo = setInterval(siguiente, 3000);
    return () => clearInterval(intervalo); // Limpiar el intervalo cuando el componente se desmonte
  }, [indice]);

  return (
    <div style={{ textAlign: "center" }}>
      <img 
        src={imagenes[indice]} 
        alt={`Imagen ${indice + 1}`} 
        style={{ width: "300px", height: "200px", borderRadius: "10px" }} 
      />
      <div>
        <button onClick={anterior}>Anterior</button>
        <button onClick={siguiente}>Siguiente</button>
      </div>
    </div>
  );
}

export default Carrusel;
