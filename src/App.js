import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import logoApp from './Images/logo.png';
import { useState } from 'react';

function App() {

  const [numClicks,setNumClicks] = useState(0); 

  const manejarClick = () =>{
    setNumClicks(numClicks + 1);
  };

  const reiniciarContador = () =>{
    setNumClicks(0);
  };

  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img 
          className='logo' 
          src={logoApp}
          alt='Logo de la aplicación'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador 
          numClicks={numClicks}
        />
        <Boton 
          texto='Click'
          botonClick={true}
          manejarClick={manejarClick}
        />
        <Boton 
          texto='Reiniciar'
          botonClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
