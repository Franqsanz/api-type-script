import express, { Application } from 'express';
import CORS from 'cors';

import index from './route';

const app: Application = express();

const PORT = process.env.PORT || 3040;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(CORS());
app.use('/api', index);

app.listen(PORT, () => console.log(`http://localhost:${PORT}/api`));
