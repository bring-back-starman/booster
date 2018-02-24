import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import express from 'express';
import http from 'http';
import morgan from 'morgan';

import config from './config/config';
import initializeDb from './db';

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

// connect to db
initializeDb(() => {
  app.server.listen(config.port, () => {
    console.log(`Started on port ${config.port} (${config.env})`);
  });
});

export default app;
