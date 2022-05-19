import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/aa", (req, res) => {
  res.send("Hello World!, aaa");
});

app.get("/bb", (req, res) => {
  res.send("Hello World!, bbb");
});

app.get("/cc", (req, res) => {
  res.send("Hello World!, ccc");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
