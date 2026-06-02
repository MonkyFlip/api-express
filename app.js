import "dotenv/config";

import express from "express";
import dotenv from "dotenv";
import userRoutes from './routes/user.js';

const app = express();
dotenv.config();

app.use(express.json())

app.get("/", (req, res) => {
  res.send("hola mundo");
});

app.use('/api/users', userRoutes);

const PORT = process.env.PORT;

/*
app.listen(PORT, () => {
  console.log(`escucha desde el puerto ${PORT}`);
});
*/

//console.log(express);
