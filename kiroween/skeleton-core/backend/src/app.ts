import express, { Application } from 'express';
import cors from 'cors';
import { errorHandler } from './common/error';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Module routes will be registered here
// Example: app.use('/api/tasks', taskRouter);

app.use(errorHandler);

export default app;
