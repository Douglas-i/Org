import './Equipo.css';
import Colaborador from '../Colaborador';

const Equipo = (props) => {

    //Destructuración
    const {colorPrimario, colorSecundario, titulo } = props.datos

    const {colaboradores, eliminarColaborador} = props
    const obj = {
        backgroundColor: colorSecundario
    }
    return  <>
        { colaboradores.length > 0  && 
            <section className='equipo' style={obj}>
            <h3 style={{borderColor: colorPrimario}}>{titulo}</h3>
            <div className='colaboradores'>            
                {
                    colaboradores.map( (colaborador, index) => <Colaborador datos={colaborador} key={index} colorPrimario={colorPrimario} eliminarColaborador={eliminarColaborador}/>)
                }
            </div>
            </section>
        }
    </>
}

export default Equipo;