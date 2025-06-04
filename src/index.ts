import express, { Express, Request, Response } from 'express';
import itemsRouter from './routes/items';

const app: Express = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming JSON request bodies
app.use(express.json());

// Base route to check if API is running
app.get('/', (_req: Request, res: Response) => {
  res.send('API is running ⚙️');
});

// Mount the items router on the /items path
app.use('/items', itemsRouter);

// Start the server on the specified port
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});