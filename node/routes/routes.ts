
import { Router } from 'express';
import userRoutes from './user.routes';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';


import swaggerDocs from './swagger.json';
  
const routes = Router();

routes.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
routes.use('/user', userRoutes);

export default routes;