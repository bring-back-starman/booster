const http = require('http');
const express = require('express');
const compress = require('compression');
const cors = require('cors');
const morgan = require('morgan');
const expressGraphQL = require('express-graphql');
const passport = require('passport');
const helmet = require('helmet');

const config = require('./config/vars');
const initApp = require('./init');
const schema = require('./graphql/schema');

require('./passport/config')({ config });

const app = express();
app.server = http.createServer(app);

// logger
app.use(morgan(config.logs));

// 3rd party middleware
app.use(cors());

// Add HTTP headers
app.use(helmet());

// gzip compress
app.use(compress());

// Attach body param to req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());
// app.use((req, res, next) => {
//   // Overriding default behavior of blocking anonymous access (401 Unauthorized)
//   // Delegating control to GraphQL resolvers
//   passport.authenticate('jwt', { session: false }, () => {
//     next();
//   })(req, res, next);
// });

app.use(passport.authenticate('jwt', { session: false }));

app.use('/graphql', expressGraphQL(() => ({
  schema,
  graphiql: process.env.NODE_ENV !== 'production',
  pretty: process.env.NODE_ENV !== 'production',
})));

initApp().then(() => {
  app.server.listen(config.port, () => {
    console.log(`Started on port ${config.port} (${config.env})`);
  });
});

module.exports = app;
