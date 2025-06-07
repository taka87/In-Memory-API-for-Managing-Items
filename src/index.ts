import express, { Express, Request, Response, NextFunction } from 'express';
import itemsRouter from './routes/items'; 

const app: Express = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming JSON request bodies
app.use(express.json({
  strict: true
}));

// Base route to check if API is running
app.get('/', (_req: Request, res: Response) => {
  res.send('API is running ⚙️');
});

// Mount the items router on the /items path
app.use('/items', itemsRouter);

// Global error handler middleware
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof SyntaxError && 'body' in err) {
    return res.status(400).json({ error: 'Invalid JSON format' });
  }

  console.error('❌ Global error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});


// Start the server on the specified port
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});