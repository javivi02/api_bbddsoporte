import { sequelize } from '../bbdd/dbConnection.js'
import { modeloUsuarios } from '../bbdd/models/Usuarios.js'
import { encrypt, verified } from '../utils/bcrypt.handle.js'
import { generateToken } from '../utils/jwt.handle.js'

const Usuarios = modeloUsuarios(sequelize)

const registerNewUser = async ({ Usuario, Contrasena, Matricula_rtve }) => {

  const isCheckUser = await Usuarios.findAll({ where: { Usuario } })
  if (isCheckUser.length > 0) return false

  const passHash = await encrypt(Contrasena)

  const newUser = {
    Usuario,
    Contrasena: passHash,
    Matricula_rtve
  }

  return Usuarios.create(newUser)

}

const loginUser = async ({ Usuario, Contrasena }) => {

  const isCheckUser = await Usuarios.findAll({ where: { Usuario } })
  if (isCheckUser.length === 0) return (1)

  const passHash = isCheckUser[0].Contrasena

  const isCorrect = await verified(Contrasena, passHash)
  if (!isCorrect) return (2)

  return {
    Usuario: isCheckUser[0].Usuario,
    token: generateToken(isCheckUser[0].UsuariosID)
  }

}

/*const checkUser = async ({ Usuario, Contrasena }) => {

  const isCheckUser = await Usuarios.findAll({ where: { Usuario } })
  if (isCheckUser.length === 0) return (1)

  const passHash = isCheckUser[0].Contrasena

  const isCorrect = await verified(Contrasena, passHash)
  if (!isCorrect) return (2)

  return {
    Usuario: isCheckUser[0].Usuario,
    token: generateToken(isCheckUser[0].UsuariosID)
  }

}*/

export { registerNewUser, loginUser }