import './Equipo.css';
import Colaborador from '../Colaborador';

const Equipo = (props) => {

    //Destructuración
    const {colorPrimario, colorSecundario, titulo } = props.datos

    const {colaboradores} = props
    const obj = {
        backgroundColor: colorSecundario
    }
    return <section className='equipo' style={obj}>
        <h3 style={{borderColor: colorPrimario}}>{titulo}</h3>
        <div className='colaboradores'>            
            {
                colaboradores.map( (colaborador, index) => <Colaborador datos={colaborador} key={index}/>)
            }
        </div>
    </section>
}

export default Equipo;