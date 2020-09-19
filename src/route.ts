import express, { Router, Request, Response } from 'express';
import routes from './routesCtrl';

const router: Router = express();

const {
  home,
  getFruits,
  getFruitsOne,
  putFruits,
  postFruits,
  deleteFruits,

  getCountries,
  getCountriesOne,
  putCountries,
  postCountries,
  deleteCountries,
} = routes;

// Index
router.get('/', home);

// Fruits
router.get('/fruits', getFruits);
router.get('/fruits/:id', getFruitsOne);
router.put('/fruits/:id', putFruits);
router.post('/fruits', postFruits);
router.delete('/fruits/:id', deleteFruits);

// Countries
router.get('/countries', getCountries);
router.get('/countries/:id', getCountriesOne);
router.put('/countries/:id', putCountries);
router.post('/countries', postCountries);
router.delete('/countries/:id', deleteCountries);

// 404
router.get('*', (req: Request, res: Response) => {
  res.status(404).send('404 page not found');
});

export default router;
