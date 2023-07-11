const express = require("express");
const app = express();
const pool = require("./db");

app.get("/", async (req, res) => {
  try {
    const quary = "select * from station";
    const result = await pool.query(quary);
    const users = result.rows;
    res.json(users);
  } catch (error) {
    console.log("error", error);
  }
});

app.listen(5000, () => {
  console.log("run");
});
