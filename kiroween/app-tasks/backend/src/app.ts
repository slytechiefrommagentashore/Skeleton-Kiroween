import express, { Application } from 'express';
import cors from 'cors';
import { errorHandler } from './common/error';
import taskRouter from './modules/tasks/router';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use('/api/tasks', taskRouter);

app.use(errorHandler);

export default app;
