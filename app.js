import "dotenv/config";

import express from "express";
import userRoutes from './routes/user.js';
import { connectMongo } from './db/mongo_conection.js';

const app = express();
app.use(express.json());

connectMongo();

app.get("/", (req, res) => {
  res.send("hola mundo");
});

app.use('/api/users', userRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`escucha desde el puerto ${PORT}`);
});

//console.log(express);
