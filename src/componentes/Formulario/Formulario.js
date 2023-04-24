
import { useState } from "react";
import "./Formulario.css"
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";
const Formulario = (props) =>{

    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const [titulo, actualizarTitulo] = useState("");
    const [color, actualizarColor] = useState("");

    //importante - DESTRUCTURACION
    const {registrarColaborador, crearEquipo} = props


    const manejarEnvio = (e) =>{
        e.preventDefault();
        console.log("Manejar el Envio");
        let datosEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        
        registrarColaborador(datosEnviar);
        
        
    }

    const manejarNuevoEquipo = (e) =>{
        e.preventDefault();
        console.log("Manejar nuevo Equipo");
        crearEquipo({titulo, colorDestaque: color});
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
                titulo= "Nombre" 
                placeholder="Ingresar nombre" 
                required={true} 
                valor={nombre} 
                actualizarValor={setNombre}
            />
            <Campo 
                titulo="Puesto" 
                placeholder="Ingresar puesto" 
                required
                valor={puesto}
                actualizarValor={setPuesto}
            />
            <Campo 
            titulo="Foto" 
            placeholder="Ingresar enlace de foto" 
            required
            valor={foto}
            actualizarValor={setFoto}
            />
            <ListaOpciones 
                valor={equipo}
                actualizarValor={setEquipo}
                equipos = {props.equipos}
            />
            <Boton>
                Crear
            </Boton>

        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el Equipo.</h2>
            <Campo 
                titulo= "Titulo" 
                placeholder="Ingresar titulo" 
                required={true} 
                valor={titulo} 
                actualizarValor={actualizarTitulo}
            />
            <Campo 
                titulo="Color" 
                placeholder="Ingresar color en Hex" 
                required
                valor={color}
                actualizarValor={actualizarColor}
                type="color"
                className="campo-color"
            />
            <Boton>Registrar Equipo</Boton>
            </form>
    </section>
}

export default Formulario;