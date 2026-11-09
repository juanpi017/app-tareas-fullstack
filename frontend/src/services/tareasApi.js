

const API_URL = 'http://localhost:3000/api/tareas'


function adaptarTarea(tareaApi) {
  return {
    id: tareaApi.id,
    texto: tareaApi.titulo,
    completada: Boolean(tareaApi.completa)
  }
}

export async function obtenerTareas() {
  const respuesta = await fetch(API_URL)

  if(!respuesta.ok){
    throw new Error(`No se pudieron obtener las tareas(${respuesta.status})`)
  }

  const tareaApi= await respuesta.json()
  return tareaApi.map(adaptarTarea)
}

export async function crearTarea(texto) {
  const respuesta = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ titulo: texto })
  })

  if (!respuesta.ok) {
    throw new Error(`No se pudo crear la tarea (${respuesta.status})`)
  }

  const tareaApi = await respuesta.json()
  return adaptarTarea(tareaApi)
}


export async function actualizarTarea(id, completa) {
  const respuesta = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ completa })
  })

  if (!respuesta.ok) {
    throw new Error(`No se pudo actualizar la tarea (${respuesta.status})`)
  }

  const tareaApi = await respuesta.json()
  return adaptarTarea(tareaApi)
}

export async function eliminarTarea(id) {
  const respuesta = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  })

  if (!respuesta.ok) {
    throw new Error(`No se pudo eliminar la tarea (${respuesta.status})`)
  }
}