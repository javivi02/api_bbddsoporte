import pkg from 'jsonwebtoken'

const { sign, verify } = pkg

const JWT_SECRET = 'clavesecreta'

const generateToken = (id) => {
  return sign({ id }, JWT_SECRET, {
    expiresIn: '2h',
  })
}

const verifyToken = (jwt) => {
  return verify(jwt, JWT_SECRET)
}

export { generateToken, verifyToken }