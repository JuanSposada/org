
import './MiOrg.css'

const MiOrg = (props) =>{ 
    //Estado Hooks
    //declaracion de useState:
    //cost [nombreDeVariable, funcionDeActualizacion] = useState(valorInicial)
    // console.log(props)
    // const [mostrar, actualizarMostrar] = useState(true);
    // const manejarClick = ( ) =>{
    //     console.log("Mostrar/Ocultar")
    //     actualizarMostrar(!mostrar);
    // }
        return <section className='orgSection'>
            <h3 className='title'>Mi organización</h3>
            <img src="/img/add.png" alt="icono" onClick={props.cambiarMostrar}></img>
        </section>
};

export default MiOrg;