//src/db.js
import mysql from'mysql2/promise';
import 'dotenv/config'; // carga las variables del archivo .env

// Un "pool" mantiene varias conexiones abiertas y las reutiliza

const db = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit:5
})

export default db;



