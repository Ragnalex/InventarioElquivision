const { Pool } = require("pg");
const { db } = require("./config");

try {
  const pool = new Pool({
    host: db.host,
    user: db.user,
    password: db.password,
    database: db.database,
    port: db.port,
  });
  console.log("Base de Datos Conectada");
  module.exports = pool;
} catch (error) {
  console.log(error);
}