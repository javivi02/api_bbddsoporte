export const logAuthLoginMiddleware = (req, res, next) => {
  console.log('Intento de login con los siguientes datos:')
  console.log(req.body)
  next()
}
