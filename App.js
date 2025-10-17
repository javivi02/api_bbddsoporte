import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { PORT } from './src/config.js'
import { sequelize } from './src/bbdd/dbConnection.js'

import adobe from './src/routes/adobe.route.js'
import agenda from './src/routes/agenda.route.js'
import almacen from './src/routes/almacen.route.js'
import areas from './src/routes/areas.route.js'
import auriculares from './src/routes/auriculares.route.js'
import auricularesPrestamos from './src/routes/auricularesPrestamos.route.js'
import autoscript from './src/routes/autoscript.route.js'
import autoscriptTipo from './src/routes/autoscriptTipo.route.js'
import auth from './src/routes/auth.route.js'
import desafectados from './src/routes/desafectados.route.js'
import edificio from './src/routes/edificio.route.js'
import estacionesTorre from './src/routes/estacionesTorre.route.js'
import mesasSonido from './src/routes/mesasSonido.route.js'
import planta from './src/routes/planta.route.js'
import equipamiento from './src/routes/equipamiento.route.js'
import prestamos from './src/routes/prestamos.route.js'
import salaMaquinas from './src/routes/salaMaquinas.route.js'
import servidores from './src/routes/servidores.route.js'
import servidoresCctt from './src/routes/servidoresCctt.route.js'
import switchRoute from './src/routes/switch.route.js'
import ubicacion from './src/routes/ubicacion.route.js'
import usuarios from './src/routes/usuarios.route.js'

// initialization
const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))

app.disable('x-powered-by') // con esto deshabilitamos la cabecera X-Powered-By: Express

// middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// conexion a la base de datos
try {
  await sequelize.authenticate()
  console.log('Connection has been established successfully.')
} catch (error) {
  console.error('Unable to connect to the database:', error)
}

app.use(
  adobe,
  agenda,
  almacen,
  areas,
  auriculares,
  auricularesPrestamos,
  autoscript,
  autoscriptTipo,
  desafectados,
  edificio,
  estacionesTorre,
  mesasSonido,
  planta,
  equipamiento,
  prestamos,
  salaMaquinas,
  servidores,
  servidoresCctt,
  switchRoute,
  ubicacion,
  usuarios,
  auth
)

// static files
app.use(express.static(join(__dirname, 'public')))

// starting the server web and Rest API
app.listen(PORT)
console.log('Server on port ...', PORT)
