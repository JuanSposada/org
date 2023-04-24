import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';


function App() {
  const [mostrarFormulario, actualizarMostrarFormulario] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys RondÃ³n",
    puesto: "Desarrolladora de software e instructora",
    fav: false
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: false
  }
  ]);

  const [equipos, actualizarEquipos] = useState([

    {
      id: uuid(),
      titulo: "Programación",
      colorFondo: "#D9F7E9",
      colorDestaque: "#57C278"
    },

    {
      id: uuid(),
      titulo: "Front End",
      colorFondo: "#E8F8FF",
      colorDestaque: "#82CFFA"
    },

    {
      id: uuid(),
      titulo: "Data Science",
      colorFondo: "#F0F8E2",
      colorDestaque: "#A6D157"
    },

    {
      id: uuid(),
      titulo: "Devops",
      colorFondo: "#FDE7E8",
      colorDestaque: "#E06B69"
    },

    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorFondo: "#FAE9F5",
      colorDestaque: "#DB6EBF"
    },

    {
      id: uuid(),
      titulo: "Móvil",
      colorFondo: "#FFF5D9",
      colorDestaque: "#FFBA05"
    },

    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorFondo: "#FFEEDF",
      colorDestaque: "#FF8A29"
    }
  ])

  
//Ternario --> condicion ? seMuestra : noSeMuestra
//condicion && seMuestra
const cambiarMostrar = () => {
  actualizarMostrarFormulario(!mostrarFormulario);
} 

//Registrar Colaborador
const registrarColaborador = (colaborador) => {
  console.log("Nuevo Colaborador ", colaborador);
  //Spread operator
  actualizarColaboradores([...colaboradores, colaborador])
  
} 

//Eliminar colaborador
const eliminarColaborador = (id) => {
  console.log("Eliminar Colaborador", id)
  const nuevosColaboradores = colaboradores.filter((colaborador)=> colaborador.id !== id )
  actualizarColaboradores(nuevosColaboradores)
}

//Actualizar color de Fondo de Equipo

const actualizarColor = (color, id) => {
  console.log("Actualizar: ", color , id)
  const equiposActualizados = equipos.map((equipo) => {
    if(equipo.id === id){
      equipo.colorDestaque = color;
    }
    return equipo
  })
  actualizarEquipos(equiposActualizados)
}

//Crear Equipo
const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
}

//Actualizar like
const like = (id) => {
  console.log('like', id)
  const colaboradoresActualizados = colaboradores.map((colaborador) => {
    if(colaborador.id === id){
      colaborador.fav = !colaborador.fav;
    }
    return colaborador
  } )
  actualizarColaboradores(colaboradoresActualizados)
}

  return (
    <div>
      <Header/>
      {/* {mostrarFormulario ? <Formulario/> : <></>} */}
      {
        mostrarFormulario && <Formulario 
          equipos={equipos.map( (equipo) => equipo.titulo  )}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      }
      <MiOrg cambiarMostrar = {cambiarMostrar}/>

      {
        equipos.map((equipo, index) =><Equipo 
          datos={equipo} 
            key={equipo.titulo}
            colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
            eliminarColaborador={eliminarColaborador}
            actualizarColor={actualizarColor}
            like = {like}
          />
        )
      }

      <Footer/>

    </div>
  );
}

export default App;
