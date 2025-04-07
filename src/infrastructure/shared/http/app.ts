import express from 'express';
import statusMonitor from 'express-status-monitor';
import { routes } from './routes';

const app = express();

app.use(express.json());
app.use(statusMonitor());
app.use(routes);

export { app };