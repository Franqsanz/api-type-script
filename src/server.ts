import express, { Application } from 'express';
import CORS from 'cors';

import index from './route';

const app: Application = express();

app.use(CORS());
app.use('/', index);

app.listen(3040, () => console.log('http://localhost:3040/'));
