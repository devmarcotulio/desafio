import express from 'express';
import statusMonitor from 'express-status-monitor';
import { routes } from './routes';
import { errors } from 'celebrate';

const app = express();

app.use(express.json());
app.use(statusMonitor());
app.use(routes);
app.use(errors());

export { app };