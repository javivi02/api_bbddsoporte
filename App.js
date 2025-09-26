import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { PORT } from './src/config.js'
import { sequelize } from './src/bbdd/dbConnection.js'
import portatiles from './src/routes/portatiles.route.js'
import auth from './src/routes/auth.route.js'
import prestamos from './src/routes/prestamos.route.js'
import estacionesTrabajo from './src/routes/estacionesTrabajo.route.js'

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

app.use(portatiles, auth, prestamos, estacionesTrabajo)

// static files
app.use(express.static(join(__dirname, 'public')))

// starting the server web and Rest API
app.listen(PORT)
console.log('Server on port ...', PORT)
