import { logger } from '../utils/logs.js'

export const logMiddlewareLogin = (req, res, next) => {
  //console.log(req)
  //console.log(req.url, req.query, req.method, req.body, req.headers, req.session)
  logger.info("Login de usuario -->", req.body)

  next()
}