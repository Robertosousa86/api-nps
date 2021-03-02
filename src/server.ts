// sempre vem primeiro
import "reflect-metadata";
import express from "express";
import "./database/index";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log("Server is running free!");
});
