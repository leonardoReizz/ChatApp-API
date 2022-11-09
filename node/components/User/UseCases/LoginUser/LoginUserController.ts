import LoginUserUseCase from "./LoginUserUseCase";
import { Request, Response } from 'express';

class LoginUserController {
	constructor(private loginUserUseCase: LoginUserUseCase) { }

	async handle(req: Request, res: Response) {
		const user = req.body;

		try {
			const login = await this.loginUserUseCase.execute(user);
			return res.status(login.status).json(login.data);
		} catch (err) {
			if (err.message === 'Invalid email or password') {
				return res.status(400).json({msg: err.message});
			}
			return res.status(400).json({msg: err.message});
		}
	}
}

export default LoginUserController;