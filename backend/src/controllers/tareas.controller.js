
import db from "../db.js";


//funcion para obtener toda la tabla de tareas
export async function listar(req,res, next) {
  try {
    const [ tareas ] = await db.query('SELECT * FROM tareas')
    res.json(tareas)
  } catch (error) {
    next(error)
  }
}

//funcion para obtener el id
export async function obtener(req,res,next) {
  try {
    const [filas] = await db.query('SELECT *FROM tareas where id=?', [Number(req.params.id)]);
    if (filas.length===0) {
      return res.status(404).json({error: 'Tarea no encontrada'})
    }
    res.json(filas[0])
  } catch (error) {
    next(error)
  }
}

//funcion para crear una tareas

export async function crear(req, res, next) {
  try {
    const { titulo } =req.body;
    if(!titulo || titulo.trim() === ''){
      return res.status(400).json({ error: 'Titulo obligatorio'})
    }
    const [resultado] = await db.query('INSERT INTO tareas (titulo) VALUES (?)', [titulo.trim()])
    const [filas] = await db.query('SELECT *FROM tareas where id=?', [resultado.insertId])
    res.status(201).json(filas[0])
  } catch (error) {
    next(error)
  }
}


//modificar la columna completada
export async function modificar(req,res,next) {
  try {
    const id = Number(req.params.id)
    const { completa } = req.body
    const [resultado] = await db.query(
      'UPDATE tareas SET completa = ? WHERE id = ?',
      [completa ? 1: 0, id]
    );
    if (resultado.affectedRows===0){
      return res.status(404).json({error: 'Tarea no encontrada'})
    }
    const [filas] = await db.query('SELECT * FROM tareas WHERE id =?', [id])
    res.json(filas[0])
  } catch (error) {
    next(error)
  }
}

//eliminar alguna tarea

export async function eliminar(req,res,next) {
  try {
    const [resultado]= await db.query('DELETE FROM tareas WHERE id = ?', [Number(req.params.id)])
    if (resultado.affectedRows===0) {
      return res.status(404).json({error: 'Tarea no encontrada'})
    }
    res.status(204).end()
  } catch (error) {
    next(error)
  }
}


