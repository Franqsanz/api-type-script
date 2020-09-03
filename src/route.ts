import { Router, Request, Response } from 'express';
import me from './db';

const router = Router();

router.get('/', (req: Request, res: Response) =>
  res.send('API Demo TypeScript')
);
router.get('/me', (req: Request, res: Response) => res.send(me));

export default router;
