import { request } from 'express';
import User from '../models/User.js';

export const createUser = async (req, res) => {
    try{
        const { name } = req.body;
        const user = User.create(name);
        res.status(201).json({
            message: "Usuario Creado",
            data: user
        });
    } catch(error) {

    }
}