import { Sequelize } from 'sequelize'
export const sequelize = new Sequelize('bbdd_soporte', 'root', 'root', {
  host: '192.28.1.2',
  port: 3308,
  dialect: 'mysql'/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
})
