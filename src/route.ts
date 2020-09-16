import express, { Router, Request, Response } from 'express';
import routes from './routesCtrl';

const { home } = routes;
const { getFruits } = routes;
const { getFruitsOne } = routes;
const { postFruits } = routes;
const { getCountries } = routes;
const { getCountriesOne } = routes;
const { postCountries } = routes;

const router: Router = express();

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
