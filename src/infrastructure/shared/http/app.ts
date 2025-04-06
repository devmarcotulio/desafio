import express from 'express';
import statusMonitor from 'express-status-monitor';

const app = express();

app.use(express.json());
app.use(statusMonitor());

export { app };