import { useState } from 'react';
import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaOpciones from '../ListaOpciones';
import Boton from '../Boton';

const Formulario = () => {

    //Estados para los campos
    const [nombre, actualizarNombre] = useState("");
    const [puesto, actualizarPuesto] = useState("");
    const [foto, actualizarFoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");

    //Manejo de los datos obtenidos
    const manejarEnvio = (e) => {
        e.preventDefault();
        let datosEnviar = {
            // nombre: nombre,
            // puesto: puesto,
            // foto: foto
            nombre,
            puesto,
            foto,
            equipo
        }
        console.log(datosEnviar);
    }

    return <section className='formulario'>
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTexto 
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                required 
                valor={nombre} 
                actualizarValor={actualizarNombre}
            />
            <CampoTexto 
                titulo="Puesto" 
                placeholder="Ingresar puesto" 
                required
                valor={puesto} 
                actualizarValor={actualizarPuesto}
            />
            <CampoTexto 
                titulo="Foto" 
                placeholder="Ingresar enlace de foto" 
                required
                valor={foto} 
                actualizarValor={actualizarFoto}
            />
            <ListaOpciones
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
            />
            <Boton texto="Crear Colaborador"/>
        </form>        
    </section>
}

export default Formulario;