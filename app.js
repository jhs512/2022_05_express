import express from "express";
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
