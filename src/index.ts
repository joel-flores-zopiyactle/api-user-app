import express, { Application } from 'express';
import cors from 'cors';
const app: Application = express()
import { conexion } from './config/mongodb'
const port  =  process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

/* importamos las rutas */
app.use('/api/1.0', require('./app/routes')) //Obtiene el index.js (por defecto ya toma el index  "./app/routes/index")

//Mongodb
conexion.connectDB();

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
