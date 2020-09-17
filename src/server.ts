import express, { Application } from 'express';
import CORS from 'cors';

import index from './route';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(CORS());
app.use('/api', index);

app.listen(3040, () => console.log('http://localhost:3040/api'));
