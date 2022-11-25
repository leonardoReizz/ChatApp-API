
import { Router } from 'express';
import userRoutes from './user.routes';
import friendsRouter from "./friends.routes";
import swaggerUi from 'swagger-ui-express';

import swaggerDocs from './swagger.json';
import friendRequestRouter from "./friendRequest.routes";
import messagesRouter from "./messages.routes";

const routes = Router();

routes.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
routes.use('/user', userRoutes);
routes.use('/friends', friendsRouter);
routes.use('/friendRequest', friendRequestRouter)
routes.use('/messages', messagesRouter);
export default routes;