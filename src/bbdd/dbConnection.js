import { Sequelize } from 'sequelize'
export const sequelize = new Sequelize('bbdd_soporte', 'root', 'root', {
  host: '192.28.1.2',
  dialect: 'mysql',
  port: 3308
})
