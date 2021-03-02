import express from 'express';
import cors from 'cors';

import { APP } from './config.js';
import './services/dbService.js';
import routes from './routes/routes.js';

const app = express();
app.use(cors());

app.use(APP.path, routes);

app.listen(APP.port, () =>
  console.log(`World API running on ${APP.host}:${APP.port}`)
);
