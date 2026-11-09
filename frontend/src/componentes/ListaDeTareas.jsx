import { useState, useEffect } from "react";
import TareaFormulario from "./TareaFormulario";
import "../styles/ListaDeTareas.css"
import Tarea from "./Tarea"
import {
  obtenerTareas,
  crearTarea,
  actualizarTarea,
  eliminarTarea as eliminarTareaApi
} from "../services/tareasApi";



function ListaDeTareas (){

  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    obtenerTareas().then(setTareas)
  }, [])

  const agregarTarea = async tarea => {
    const texto = tarea.texto.trim()
    if (!texto) return

    const tareaNueva = await crearTarea(texto)
    setTareas(tareasPrevias => [tareaNueva, ...tareasPrevias])
  
  }

  const eliminarTarea = async id => {
    await eliminarTareaApi(id)
    setTareas(tareasPrevias => tareasPrevias.filter(t => t.id !== id))
  }

    const completarTarea = async id => {
      const tarea = tareas.find(t => t.id === id)
      const tareaActualizada = await actualizarTarea(id, !tarea.completada)

      setTareas(tareasPrevias =>
      tareasPrevias.map(t => (t.id === id ? tareaActualizada : t))
    )
  }

  return(
    <>
      <TareaFormulario onSubmit={agregarTarea}/>
      <div className="tareas-lista-contenedor">
        {
          tareas.map((tarea)=>
            <Tarea
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}  
              completada={tarea.completada}
              onClick={agregarTarea}
              eliminarTarea={eliminarTarea}
              completarTarea={completarTarea}
            />
          )
        }
      </div>
    </>
  )
}

export default ListaDeTareas;