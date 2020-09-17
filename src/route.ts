import express, { Router, Request, Response } from 'express';
import routes from './routesCtrl';

const router: Router = express();

const {
  home,
  getFruits,
  getFruitsOne,
  postFruits,
  getCountries,
  getCountriesOne,
  postCountries,
} = routes;

// Index
router.get('/', home);

// Fruits
router.get('/fruits', getFruits);
router.get('/fruits/:id', getFruitsOne);
router.post('/fruits', postFruits);

// Countries
router.get('/countries', getCountries);
router.get('/countries/:id', getCountriesOne);
router.post('/countries', postCountries);

// 404
router.get('*', (req: Request, res: Response) => {
  res.status(404).send('404 page not found');
});

export default router;
