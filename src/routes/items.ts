import { Router, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

// Define the structure of an Item
interface Item {
  id: string;
  name: string;
}

const router = Router();
const items: Item[] = [];  // In-memory array to store items

// GET /items - Return all stored items
router.get('/', (_req: Request, res: Response) => {
  res.json(items);
});

// POST /items - Add a new item to the in-memory collection
router.post('/', (req: Request, res: Response) => {
  // Explicitly define the shape of the request body
  const body: { name?: string } = req.body;
  
  // Validate that name is provided and is a string
  if (!body.name || typeof body.name !== 'string') {
    return res.status(400).json({ error: 'Name is required and must be a string' });
  }

  // Create a new item with a unique ID
  const newItem: Item = {
    id: uuidv4(),
    name: body.name
  };

  // Store the new item in memory
  items.push(newItem);
  
  // Return the created item with status code 201
  res.status(201).json(newItem);
});

export default router;