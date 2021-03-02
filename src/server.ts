// sempre vem primeiro
import "reflect-metadata";
import express from "express";
import "./database/index";

const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "Hello juba" });
});

app.post("/", (req, res) => {
  return res.json({ message: "Dados enviados" });
});

app.listen(3000, () => {
  console.log("Server is running free!");
});
