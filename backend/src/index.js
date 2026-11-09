import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import db from './db.js'
import { noEncontrado, manejarErrores } from './middlewares/errores.js' //traidas de middlewares 
import tareasRouter from './routes/tareas.routes.js'


/*un middleware es una función que se ejecuta entre la llegada de la petición y la ruta. Puede revisar, modificar o detener la petición. Es como el
guarda de seguridad en la entrada de un edificio.*/

const app = express()

app.use(express.json())

const corsOptions ={
  origin: 'http://localhost:5173'
}

app.use(cors(corsOptions));

app.use('/api/tareas', tareasRouter)


app.get('/api',(req,res)=>{
  res.send('Mi primer servidor hoy')
})



app.use(noEncontrado) //si ninguna ruta coincide
app.use(manejarErrores) //siempre al final

const PUERTO = process.env.PORT || 3000;
try {
  await db.query('SELECT 1')
  console.log('Conectado a mysql')
  app.listen(PUERTO,()=>{
    console.log(`servidor escuchando en el puerto: ${PUERTO}`)
  })
} catch (error) {
  console.log('No se puede conectar a mysql')

}


