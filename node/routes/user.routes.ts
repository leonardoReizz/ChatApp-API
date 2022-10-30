import { Request, Response, Router } from "express";
import loginUserController from "../components/User/UseCases/LoginUser";



const userRoutes = Router();

userRoutes.post('/login', async (req: Request, res: Response) => {
    await loginUserController.handle(req, res);
});


export default userRoutes;