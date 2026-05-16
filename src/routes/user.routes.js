import { Router } from 'express';
import { getUsers, getUser } from '../controllers/user.controller.js';
import authorizeUser from '../middlewares/auth.middleware.js';

const userRouter = Router();

// Path: /api/v1/users
userRouter.get('/', getUsers);

userRouter.get('/:id', authorizeUser, getUser);

userRouter.post('/', (req, res) => {
    res.send({
        message: "Create a new user"
    });
});

userRouter.put('/:id', (req, res) => {
    res.send({
        message: "Update user"
    });
});

userRouter.delete('/:id', (req, res) => {
    res.send({
        message: "Delete user"
    });
});

export default userRouter;