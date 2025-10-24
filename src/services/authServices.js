import { sequelize } from '../bbdd/dbConnection.js'
import { modeloUsuarios } from '../bbdd/models/Usuarios.js'
import { encrypt, verified } from '../utils/bcrypt.handle.js'
import { generateToken } from '../utils/jwt.handle.js'

const Usuarios = modeloUsuarios(sequelize)

const registerNewUser = async (user) => {
  const { Usuario, Password, Grupos_usuariosID, Nombre, Apellidos, DNI, Matricula_rtve, Email, Telefono_movil, Telefono_rtve, Telefono_rtve_corto } = user

  // Verificar si el usuario ya existe
  const existingUser = await Usuarios.findOne({
    where: { Usuario }
  })

  if (existingUser) {
    throw new Error('El usuario ya existe')
  }

  const passHash = await encrypt(Password)

  const newUser = {
    Usuario,
    Password: passHash,
    Grupos_usuariosID,
    Nombre,
    Apellidos,
    DNI,
    Matricula_rtve,
    Email,
    Telefono_movil,
    Telefono_rtve,
    Telefono_rtve_corto
  }

  console.log(newUser)

  return Usuarios.create(newUser)
}

const loginUser = async (user) => {
  // Validación de entrada
  if (!user) {
    throw new Error('Usuario y contraseña son requeridos')
  }

  const { Usuario, Password } = user

  // Buscar usuario
  const [rows] = await sequelize.query(`SELECT
    Usuario as usuario,
    Password as password,
    Nombre as nombre,
    Apellidos as apellidos,
    Grupos_usuarios.Grupo_usuario AS rol
  FROM Usuarios
  INNER JOIN Grupos_usuarios ON Usuarios.Grupos_usuariosID = Grupos_usuarios.Grupos_usuariosID
  WHERE Usuario = '${Usuario}'`)

  const userData = rows[0]
  console.log(userData)

  // Usuario no encontrado
  if (!userData) {
    throw new Error('Credenciales inválidas, usuario no encontrado')
  }

  // Verificar contraseña
  const isPasswordValid = await verified(Password, userData.password)

  if (!isPasswordValid) {
    throw new Error('Credenciales inválidas, contraseña incorrecta')
  }

  // Generar token
  const token = generateToken(userData)

  // Retornar datos del usuario (sin la contraseña)
  return {
    usuario: userData.usuario,
    nombre: userData.nombre,
    apellidos: userData.apellidos,
    rol: userData.rol,
    token
  }
}

export { registerNewUser, loginUser }
