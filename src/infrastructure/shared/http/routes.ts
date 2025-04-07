import { Router } from "express";
import { transactionRoutes } from "./routes/transactionRoutes";

const routes = Router();

routes.use('/', transactionRoutes);

export { routes };