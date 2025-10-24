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
    const newUser = await registerNewUser(user)

    return res.status(201).json({
      success: true,
      message: 'Usuario registrado exitosamente',
      data: newUser
    })
  } catch (error) {
    // Manejo de errores específicos
    if (error.message.includes('ya existe') || error.message.includes('ya está registrado')) {
      return res.status(409).json({
        success: false,
        message: error.message
      })
    }

    if (error.message.includes('obligatorios')) {
      return res.status(400).json({
        success: false,
        message: error.message
      })
    }

    // Error genérico del servidor
    return res.status(500).json({
      success: false,
      message: 'Error al registrar usuario'
    })
  }
}

export const checkController = async (req, res) => {
  const user = req.user
  // console.log(user)
  res.status(200)
  res.send({ message: `Session valid for user: ${user.usuario} with role: ${user.rol}` })
}
