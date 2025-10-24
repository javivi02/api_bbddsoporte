import { loginUser, registerNewUser } from '../services/authServices.js'

export const loginController = async (req, res) => {
  const user = req.body

  try {
    const result = await loginUser(user)

    return res.status(200).json({
      success: true,
      data: result
    })
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: error.message
    })
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
  const user = req.user
  console.log(user)
  res.status(200)
  res.send(user)
}
