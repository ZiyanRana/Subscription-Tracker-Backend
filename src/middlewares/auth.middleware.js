import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/env.js';
import UserModel from '../models/user.model.js';

const authorizeUser = async (req, res, next) => {
    try { 
        let token;

        if (req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
        }

        if (!token) {
            const error = new Error('Unauthorized user');
            error.statusCode = 401;
            throw error;
        }

        const decoded = jwt.verify(token, JWT_SECRET);
        const user = await UserModel.findById(decoded.userId);

        if (!user) {
            const error = new Error('Unauthorized user');
            error.statusCode = 401;
            throw error;
        } 

        req.user = user;
        next();
    }
    catch (error) {
        res.status(401).json({
                message: "Unauthorized user",
                error: error.message
        })
    }
}

export default authorizeUser;