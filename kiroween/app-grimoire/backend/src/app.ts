import express, { Application } from 'express';
import cors from 'cors';
import { errorHandler } from './common/error';
import spellRouter from './modules/spells/router';

const app: Application = express();

// Ritual setup for middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Register spell routes
app.use('/api/spells', spellRouter);

// Curse containment middleware
app.use(errorHandler);

export default app;
