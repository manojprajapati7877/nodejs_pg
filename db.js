const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "testdb",
  password: "Manoj",
  port: 5432,
});

pool.connect((err, client) => {
  if (err) {
    return console.log("error", err);
  }
  console.log("connect");
});

module.exports = pool;
