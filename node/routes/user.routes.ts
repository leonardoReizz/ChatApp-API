import { Request, Response, Router } from "express";
import loginUserController from "../components/User/UseCases/LoginUser";
import registerUserController from "../components/User/UseCases/RegisterUser";
import { getUserByIdController } from "../components/User/UseCases/GetUserById/index";
import { getUserByEmailController } from "../components/User/UseCases/GetUserByEmail/index";

const userRoutes = Router();

userRoutes.post('/login', async (req: Request, res: Response) => {
    return await loginUserController.handle(req, res);
});

userRoutes.post('/register', async (req: Request, res: Response) => {
    return await registerUserController.handle(req, res);
});

userRoutes.get('/email/:email', async (req: Request, res: Response) => {
    return await getUserByEmailController.handle(req, res);
});

userRoutes.get('/id/:userId', async (req: Request, res: Response) => {
    return await getUserByIdController.handle(req, res);
});


export default userRoutes;