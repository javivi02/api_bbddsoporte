import { verifyToken } from '../utils/jwt.handle.js'

const checkSessionMiddleware = (req, res, next) => {
  try {
    // Extraer el header de autorización
    const authHeader = req.headers.authorization

    // Validar que existe el header
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'Token no proporcionado o formato inválido'
      })
    }

    // Extraer el token
    const token = authHeader.split(' ')[1]

    // Validar que el token no esté vacío
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Token no proporcionado'
      })
    }

    // Verificar el token
    const decoded = verifyToken(token)

    // Validar que la verificación fue exitosa
    if (!decoded) {
      return res.status(401).json({
        success: false,
        message: 'Token inválido o expirado'
      })
    }

    console.log('Token verificado correctamente:', decoded)

    // Adjuntar los datos del usuario decodificados a la request
    req.user = decoded

    next()
  } catch (error) {
    // Manejo de errores específicos
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({
        success: false,
        message: 'Token malformado'
      })
    }

    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({
        success: false,
        message: 'Token expirado'
      })
    }

    // Error genérico
    return res.status(401).json({
      success: false,
      message: 'Error de autenticación'
    })
  }
}

export { checkSessionMiddleware }
