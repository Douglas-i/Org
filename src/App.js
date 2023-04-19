import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';

function App() {
  
  const [mostrarFormulario, actualizarMostrar] = useState(true);

  //Ternario --> Condicion ? seMuestra: noseMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  return (
    <div>      
      <Header></Header>
      {mostrarFormulario === true ? <Formulario/> : <div/>}
      <MiOrg cambiarMostrar={cambiarMostrar}/>
    </div>
  );
}

export default App;
