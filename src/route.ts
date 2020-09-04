import express, { Router, Request, Response } from 'express';
import me from './db';

const router: Router = express();

router.get('/', (req: Request, res: Response) =>
  res.send('API Demo TypeScript')
);
router.get('/me', (req: Request, res: Response) => res.send(me));
router.get('*', (req: Request, res: Response) =>
  res.status(404).send('404 page not found')
);

export default router;
