import http from 'http';
import express from 'express';
import compress from 'compression';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import printMessage from 'print-message';
import {
  graphqlExpress,
  graphiqlExpress,
} from 'graphql-server-express';

import auth from './auth/auth';
import graphQLOptions from './graphql/schema';
import config from './config/vars';
import { db } from './init/db';


const start = async () => {
  await db.sync();
  const app = express();
  app.server = http.createServer(app);

  app.use(morgan(config.logs));
  app.use(cors());
  app.use(helmet());
  app.use(compress());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(auth.initialize());

  app.use('/graphql', auth.authenticate(), graphqlExpress(graphQLOptions));
  app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql', passHeader: `"Authorization": "Bearer ${auth.token}"` }));

  app.server.listen(config.port, () => {
    printMessage([
      `Started on port ${config.port} (${config.env})`,
      '',
      `GraphQL endpoint:  http://localhost:${config.port}/graphql`,
      `GraphiQL endpoint: http://localhost:${config.port}/graphiql`,
      '',
      `Token: ${auth.token}`,
    ], {
      marginTop: 1,
      marginBottom: 1,
    });
  });
};

start();
