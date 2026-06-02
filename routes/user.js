import express from 'express'
const route = express.Router();

import { createUser } from '../controllers/userController.js';

/** 
 * @swagger
 * /api/users:
 *  post:
 *      summary: create usuario
 *      tags:
 *          - Users
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                              example: Ury
 *      responses:
 *          201:
 *              description: Usuario creado 
*/
route.post('/', createUser)

export default route;