import express from 'express';
import bodyParser from 'body-parser';

import config from './config.js';

import endPoints from './endpoints/index.js';

import isLogged from './middleware/logged.js';

const app = express();
app.use(bodyParser.json());

app.post('/login', endPoints.login);
app.get('/randomAnimal', isLogged, endPoints.randomAnimal);

app.use('/assets', express.static('assets'));

app.listen(config.port, () => {
  console.log('Server running on port 3000');
});
