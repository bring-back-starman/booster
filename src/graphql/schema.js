import { makeExecutableSchema } from 'graphql-tools';
import glue from 'schemaglue';

const { schema, resolver } = glue('src/graphql');

const executableSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers: resolver,
});

export default req => ({
  schema: executableSchema,
  context: {
    user: req.user,
  }
});