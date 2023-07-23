import { verifyToken } from '../utils/jwt.handle.js'

const checkSession = (req, res, next) => {
  try {
    const jwtByUser = req.headers.authorization || ''
    const jwt = jwtByUser.split(' ').pop()

    // Lo que retorna verifyToken es el payload del jwt, es decir en nuestro caso el id del usuario, que hemos
    // indicado en la parte del login

    const isUser = verifyToken(`${jwt}`)
    req.user = isUser
    next()

    /*
    const isUser = verifyToken(`${jwt}`)

    console.log( isUser )

    if (!isUser) {
      res.status(401)
      res.send('NO_TIENES_UN_JWT_VALIDO')
    } else {
      req.user = isUser
      next()
    }

     */

  } catch (e) {
    console.log(e.name)
    res.status(400)
    res.send(e.name.toString().toUpperCase())
  }
}

export { checkSession }