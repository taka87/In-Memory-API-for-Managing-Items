import { Router, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { Item } from '../models/item'; 

const router = Router();
const items: Item[] = [];  // In-memory array to store items

// GET /items - Return all stored items
router.get('/', (_req: Request, res: Response) => {
  res.json(items);
});

// POST /items - Add a new item to the in-memory collection
router.post('/', (req: Request, res: Response) => {
  const body: { name?: string } = req.body;

  if (!body.name || typeof body.name !== 'string') {
    return res.status(400).json({ error: 'Name is required and must be a string' });
  }

  const newItem: Item = {
    id: uuidv4(),
    name: body.name
  };

  items.push(newItem);
  res.status(201).json(newItem);
});

// GET /items/:id - Get a single item by ID
router.get('/:id', (req: Request, res: Response) => {
  const item = items.find(i => i.id === req.params.id);

  if (!item) {
    return res.status(404).json({ error: 'Item not found' });
  }

  res.json(item);
});

// PUT /items/:id - Update an item by ID
router.put('/:id', (req: Request, res: Response) => {
  const body: { name?: string } = req.body;

  if (!body.name || typeof body.name !== 'string') {
    return res.status(400).json({ error: 'Name is required and must be a string' });
  }

  const index = items.findIndex(i => i.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({ error: 'Item not found' });
  }

  // Update the item
  items[index].name = body.name;

  res.json(items[index]);
});

// DELETE /items/:id - Delete an item by ID
router.delete('/:id', (req: Request, res: Response) => {
  const index = items.findIndex(i => i.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({ error: 'Item not found' });
  }

  items.splice(index, 1);
  res.json({ message: 'Item deleted successfully' }); //custom message UI frendly

  // const deletedItem = items.splice(index, 1)[0]; 
  // res.json(deletedItem);
});

export default router;