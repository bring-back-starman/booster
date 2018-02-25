import { GraphQLObjectType } from 'graphql';
import { attributeFields } from 'graphql-sequelize';

const Mission = require('../../models/Mission');

const missionType = new GraphQLObjectType({
  name: 'Mission',
  description: 'A mission',
  fields: {
    ...attributeFields(Mission),
    // Here we put model relationships
  },
});

module.exports = missionType;
