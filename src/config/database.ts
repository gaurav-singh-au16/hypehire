import { Sequelize } from 'sequelize-typescript'
import dotenv from 'dotenv';
dotenv.config()

// const db = new Sequelize({
//   ssl: false,
//   database: process.env.DB_NAME,
//   dialect: 'postgres',
//   username: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   storage: ':memory:',
//   logging: false,
//   host: process.env.DB_HOST 

// })
const db = new Sequelize(process.env.POSTGRES_URL+ "?sslmode=require")

export default db;