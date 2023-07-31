import { loginUser, registerNewUser } from '../services/authServices.js'

export const loginController = async (req, res) => {

  const user = req.body

  try {
    const resultado = await loginUser(user)
    if (resultado === 1) return res.send('El usuario no existe')
    if (resultado === 2) return res.send('La contraseña no es correcta')

    res.send(resultado)

  } catch (error) {
    console.log(error)
    res.send('Error al loguear el usuario')
  }

}

export const registerController = async (req, res) => {

  const user = req.body

  try {
    const resultado = await registerNewUser(user)
    if (!resultado) return res.send('El usuario ya existe')

  } catch (error) {
    console.log(error)
    res.send('Error al crear el usuario')
  }

  res.send('Usuario creado correctamente')
}

export const checkController = async (req, res) => {
  res.status(200)
  res.send('Usuario con token correcto')
}
