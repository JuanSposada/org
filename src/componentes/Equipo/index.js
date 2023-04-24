import "./Equipo.css";
import Colaborador from "../Colaborador";
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {

    //Destructuracion
    const {titulo, colorFondo, colorDestaque, id} = props.datos;
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props;

    const estiloTitulo = {borderColor: colorDestaque}

    //<> </> Fragment son importantes para marcar la estructura de jsx
    return <>
    {   colaboradores.length > 0 &&
        <section className="equipo" style={{backgroundColor: hexToRgba(colorDestaque, 0.6)}}>
            <input 
                type="color"
                className="input-color"
                value={colorDestaque}
                onChange={(event) => {
                    actualizarColor(event.target.value, id)
                }}
            
                />
            <h3 style={estiloTitulo}>{titulo}</h3>
            <div className="colaboradores">
            
                {
                    colaboradores.map( (colaborador,index) => <Colaborador 
                    key={index} 
                    datos={colaborador} 
                    colorDestaque={colorDestaque}
                    eliminarColaborador={eliminarColaborador}
                    like = {like}
                    />)
                }
            </div>
    </section>}
    </>
}

export default Equipo;