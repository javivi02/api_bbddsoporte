export const logAuthRegisterMiddleware = (req, res, next) => {
  console.log('Intento de registro con los siguientes datos:')
  console.log(req.body)
  next()
}
