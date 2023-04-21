import "./ListaOpciones.css";

const ListaOpciones = (props) => {
   
    // Metodo map -> arreglo.map( (equipo, index) => {
    //      return <option></option>
    // })
    
    // const equipos = [
    //     "Programación",
    //     "Front End",
    //     "Data Science",
    //     "Devops",
    //     "Móvil",
    //     "Innovación y Gestión"
    // ]

    const manejarCambio = (e) => {
        // console.log("cambio", e.target.value);
        props.actualizarEquipo(e.target.value);
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
            { props.equipos.map((equipos, index) => <option key={index}>{equipos}</option>) }
            {/* <option>Programaciónn</option>
            <option>Front End</option>
            <option>Data Science</option>
            <option>Devops</option>
            <option>Móvil</option>
            <option>Innovación y Gestión</option> */}
        </select>
    </div>
}

export default ListaOpciones;