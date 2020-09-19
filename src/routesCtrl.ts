/* eslint-disable prettier/prettier */

import { Request, Response } from 'express';
import db from './db';

const { fruits, countries } = db;
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

  const search = Fruits.find((fruit) => fruit.id == id);
  res.send(search);
}

function putFruits(req: Request, res: Response) {
  const { id } = req.params;
  const { body } = req;

  const index = Fruits.find((fruit) => fruit.id == id);
  if (index) {
    Object.keys(body).forEach((key) => {
      index[key] = body[key];
    });
  }
  res.send(index);
}

function postFruits(req: Request, res: Response) {
  const newFruit = {
    id: 4,
    Fruit: 'Pear',
    Climate: 'Wrm and Humid',
  };

  Fruits.push(newFruit);
  res.send(fruits);
}

function deleteFruits(req: Request, res: Response) {
  const { id } = req.params;

  const deleteFruit = Fruits.findIndex((fruit) => fruit.id == id);
  if (deleteFruit > -1) {
    Fruits.splice(deleteFruit, 1);
  }
  res.send(fruits);
}

// Countries
function getCountries(req: Request, res: Response) {
  res.send(countries);
}

function getCountriesOne(req: Request, res: Response) {
  const { id } = req.params;

  const search = Countries.find((country) => country.id == id);
  res.send(search);
}

function putCountries(req: Request, res: Response) {
  const { id } = req.params;
  const { body } = req;

  const index = Countries.find((country) => country.id == id);
  if (index) {
    Object.keys(body).forEach((key) => {
      index[key] = body[key];
    });
  }
  res.send(index);
}

function postCountries(req: Request, res: Response) {
  const newCountry = {
    id: 4,
    Fruit: 'Pear',
    Climate: 'Wrm and Humid',
  };

  Countries.push(newCountry);
  res.send(countries);
}

function deleteCountries(req: Request, res: Response) {
  const { id } = req.params;

  const deleteCountrie = Countries.findIndex((country) => country.id == id);
  if (deleteCountrie > -1) {
    Countries.splice(deleteCountrie, 1);
  }
  res.send(countries);
}

export default {
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
