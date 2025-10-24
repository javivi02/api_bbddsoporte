import pkg from 'jsonwebtoken'

const { sign, verify } = pkg

const JWT_SECRET = 'nW2M9YcGZRRqcpMGavd2rXUJ8VCi5XrcGJ1DvonTL4Q='

const generateToken = (userData) => {
  const token = sign(userData, JWT_SECRET, {
    expiresIn: '10h'
  })
  return token
}

const verifyToken = (jwt) => {
  return verify(jwt, JWT_SECRET)
}

export { generateToken, verifyToken }
