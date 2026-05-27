import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config();

app.get("/", (req, res) => {
  res.send("hola mundo");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`escucha desde el puerto ${PORT}`);
});

console.log(express);
