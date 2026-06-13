import { json, request } from 'express';
import User from '../models/User.js';

export const createUser = async (req, res) => {
    try{
        // const { name } = req.body;
        const user = await User.create(req.body);
        res.status(201).json({
            message: "Usuario Creado",
            data: user
        });
    } catch(error) {
        res.status(500), json({
            message: error.message
        });
    }
}