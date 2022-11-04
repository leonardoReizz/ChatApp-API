import { Request, Response, Router } from "express";
import loginUserController from "../components/User/UseCases/LoginUser";
import registerUserController from "../components/User/UseCases/RegisterUser";



const userRoutes = Router();

userRoutes.post('/login', async (req: Request, res: Response) => {
    await loginUserController.handle(req, res);
});

userRoutes.post('/register', async (req: Request, res: Response) => {
    await registerUserController.handle(req, res);
})


export default userRoutes;