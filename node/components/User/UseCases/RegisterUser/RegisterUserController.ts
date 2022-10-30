import { Request, Response } from "express";
import RegisterUserUseCase from "./RegisterUserUseCase";

class RegisterUserController {
    constructor(private registerUserUseCase: RegisterUserUseCase){}

    async handle(req: Request, res: Response) {
        const user = req.body;

        try {
            const register = await this.registerUserUseCase.execute(user);
            return res.status(register.status).json(register.data);
        } catch (err) {
            return res.status(400).json({msg: err.message});
        }
    }
}


export default RegisterUserController;