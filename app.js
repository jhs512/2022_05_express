import express from "express";
import mysql from "mysql2/promise";

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
  host: "localhost",
  user: "sbsst",
  password: "sbs123414",
  database: "exam2",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/todos", (req, res) => {
  const todos = [
    {
      id: 3,
      content: "내용3",
    },
    {
      id: 2,
      content: "내용3",
    },
    {
      id: 1,
      content: "내용3",
    },
  ];
  res.json(todos);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
