"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
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
const db = new sequelize_typescript_1.Sequelize(process.env.POSTGRES_URL + "?sslmode=require");
exports.default = db;
//# sourceMappingURL=database.js.map