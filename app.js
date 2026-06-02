import express from "express";
import dotenv from "dotenv";
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';

import userRoutes from './routes/user.js';
import swaggerSpec from "./config/swagger.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json())

app.use('/api/docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
)

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

console.log(express);
