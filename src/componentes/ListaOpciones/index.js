import "./ListaOpciones.css";

const ListaOpciones = () => {
   
    // Metodo map -> arreglo.map( (equipo, index) => {
    //      return <option></option>
    // })
    
    const equipos = [
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "Móvil",
        "Innovación y Gestión"
    ]

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select>
            { equipos.map((equipos, index) => {
                return <option key={index}>{equipos}</option>
            }) }
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