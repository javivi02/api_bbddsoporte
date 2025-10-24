/**
 * Middleware para validar roles de usuario
 * @param {string|string[]} allowedRoles - Rol o array de roles permitidos
 * @returns {Function} Middleware function
 */

export const checkRoleMiddleware = (allowedRoles) => {
  return (req, res, next) => {
    try {
      // Validar que el usuario existe en la request (debe pasar primero por checkSessionMiddleware)
      if (!req.user) {
        return res.status(401).json({
          success: false,
          message: 'Usuario no autenticado'
        })
      }

      // Validar que el usuario tiene un rol asignado
      if (!req.user.rol && !req.user.role) {
        return res.status(403).json({
          success: false,
          message: 'Usuario sin rol asignado'
        })
      }

      // Obtener el rol del usuario (puede venir como 'rol' o 'role')
      const userRole = req.user.rol || req.user.role

      // Convertir allowedRoles a array si es un string
      const rolesArray = Array.isArray(allowedRoles) ? allowedRoles : [allowedRoles]

      // Verificar si el usuario tiene alguno de los roles permitidos
      const hasPermission = rolesArray.includes(userRole)

      if (!hasPermission) {
        return res.status(403).json({
          success: false,
          message: 'No tienes permisos para acceder a este recurso'
        })
      }

      // Usuario autorizado
      next()
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Error al validar permisos'
      })
    }
  }
}
