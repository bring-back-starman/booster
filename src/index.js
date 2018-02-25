const http = require('http');
const express = require('express');
const compress = require('compression');
const cors = require('cors');
const morgan = require('morgan');
const expressGraphQL = require('express-graphql');

const config = require('./config/vars');
const registerModels = require('./models');
const schema = require('./graphql/schema');

const app = express();
app.server = http.createServer(app);

// logger
app.use(morgan(config.logs));

// 3rd party middleware
app.use(cors());

app.use(compress());

// Attach body param to req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/graphql', expressGraphQL(() => ({
  schema,
  graphiql: process.env.NODE_ENV !== 'production',
  pretty: process.env.NODE_ENV !== 'production',
})));

registerModels().then(() => {
  app.server.listen(config.port, () => {
    console.log(`Started on port ${config.port} (${config.env})`);
  });
});

module.exports = app;
