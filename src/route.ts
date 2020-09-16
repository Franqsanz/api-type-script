import express, { Router, Request, Response } from 'express';
import fruits from './db';

const router: Router = express();

router.get('/', (req: Request, res: Response) => {
  res.send('API Demo TypeScript');
});

router.get('/fruits', (req: Request, res: Response) => res.send(fruits));

router.get('/fruits/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const search = fruits.Fruits.find((fruit) => fruit.id == id);
  res.send(search);
});

router.post('/fruits', (req: Request, res: Response) => {
  const newFruit = {
    id: 4,
    Fruit: 'Pear',
    Climate: 'Warm and Humid',
  };

  fruits.Fruits.push(newFruit);
  res.send(fruits);
});

router.get('*', (req: Request, res: Response) => {
  res.status(404).send('404 page not found');
});

export default router;
