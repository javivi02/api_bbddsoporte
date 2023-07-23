export const logMiddleware = (req, res, next) => {
  //console.log(req.url, req.query, req.method, req.body, req.headers, req.session)
  console.log("logMiddleware")
  next()
}