/* eslint-disable prettier/prettier */

import { Request, Response } from 'express';
import { fruits, countries } from './db';

const { Fruits } = fruits;
const { Countries } = countries;

function home(req: Request, res: Response) {
  res.send(`
    <section>
      <h1>API REST TypeScript Demo</h1>
      <h2>Fruits</h2>
      <a href="http://localhost:3040/api/fruits">
        http://localhost:3040/api/fruits
      </a>
      <br>
      <h2>Countries</h2>
      <a href="http://localhost:3040/api/countries">
        http://localhost:3040/api/countries
      </a>
    </section>
  `);
}

// Fruits
function getFruits(req: Request, res: Response) {
  res.send(fruits);
}

function getFruitsOne(req: Request, res: Response) {
  const { id } = req.params;

  const fruitOne = Fruits.find((fruit) => fruit.id == id);

  if (!fruitOne) res.status(404).send('Is fruit doesn′t exist');
  res.send(fruitOne);
}

function putFruits(req: Request, res: Response) {
  const { id } = req.params;
  const { body } = req;

  const index = Fruits.find((fruit) => fruit.id == id);
  if (index) Object.keys(body).forEach((key) => (index[key] = body[key]));
  res.send(index);
}

function postFruits(req: Request, res: Response) {
  const { body } = req;

  const newFruit = {
    id: body.id,
    fruit: body.fruit,
    climate: body.climate,
  };

  Fruits.push(newFruit);
  res.send(fruits);
}

function deleteFruits(req: Request, res: Response) {
  const { id } = req.params;

  const deleteFruit = Fruits.findIndex((fruit) => fruit.id == id);
  if (deleteFruit > -1) Fruits.splice(deleteFruit, 1);
  res.send(fruits);
}

// Countries
function getCountries(req: Request, res: Response) {
  res.send(countries);
}

function getCountriesOne(req: Request, res: Response) {
  const { id } = req.params;

  const countryOne = Countries.find((country) => country.id == id);

  if (!countryOne) res.status(404).send('This country doesn′t exist');
  res.send(countryOne);
}

function putCountries(req: Request, res: Response) {
  const { id } = req.params;
  const { body } = req;

  const index = Countries.find((country) => country.id == id);
  if (index) Object.keys(body).forEach((key) => (index[key] = body[key]));
  res.send(index);
}

function postCountries(req: Request, res: Response) {
  const { body } = req;

  const newCountry = {
    id: body.id,
    name: body.name,
  };

  Countries.push(newCountry);
  res.send(countries);
}

function deleteCountries(req: Request, res: Response) {
  const { id } = req.params;

  const deleteCountrie = Countries.findIndex((country) => country.id == id);
  if (deleteCountrie > -1) Countries.splice(deleteCountrie, 1);
  res.send(countries);
}

export {
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
};
