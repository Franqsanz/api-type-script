/* eslint-disable prettier/prettier */

import { Request, Response } from 'express';
import db from './db';

const { fruits, countries } = db;

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

  const search = fruits.Fruits.find((fruit) => fruit.id == id);
  res.send(search);
}

function postFruits(req: Request, res: Response) {
  const newFruit = {
    id: 4,
    Fruit: 'Pear',
    Climate: 'Wrm and Humid',
  };

  fruits.Fruits.push(newFruit);
  res.send(fruits);
}

// Countries
function getCountries(req: Request, res: Response) {
  res.send(countries);
}

function getCountriesOne(req: Request, res: Response) {
  const { id } = req.params;

  const search = countries.Countries.find((country) => country.id == id);
  res.send(search);
}

function postCountries(req: Request, res: Response) {
  const newCountry = {
    id: 4,
    Fruit: 'Pear',
    Climate: 'Wrm and Humid',
  };

  countries.Countries.push(newCountry);
  res.send(countries);
}

export default {
  home,
  getFruits,
  getFruitsOne,
  postFruits,

  getCountries,
  getCountriesOne,
  postCountries,
};
