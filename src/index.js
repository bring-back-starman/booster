import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import express from 'express';
import http from 'http';
import morgan from 'morgan';

import api from './api';
import config from './config/config';
import initializeDb from './db';
import middleware from './middleware';

const app = express();
app.server = http.createServer(app);

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(cors());

app.use(bodyParser.json({
  limit: config.bodyLimit,
}));

app.use(compression());

console.log(config);

// connect to db
initializeDb(config, (db) => {
  // internal middleware
  app.use(middleware({ config, db }));

  // api router
  app.use('/api', api({ config, db }));

  app.server.listen(config.port, () => {
    console.log(`Started on port ${config.port} (${config.env})`);
  });
});

export default app;
