import pkg from 'jsonwebtoken'
import { logger } from './logs.js'

const { sign, verify } = pkg

const JWT_SECRET = 'clavesecreta'

const generateToken = (id) => {
  const token = sign({ id }, JWT_SECRET, {
    expiresIn: '2h',
  })
  logger.info(`Token generado para el usario con ID (${id}) -->`, token)
  return token
}

const verifyToken = (jwt) => {
  return verify(jwt, JWT_SECRET)
}

export { generateToken, verifyToken }