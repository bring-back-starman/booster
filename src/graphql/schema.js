const {
  GraphQLObjectType, GraphQLSchema, GraphQLNonNull, GraphQLInt, GraphQLList, GraphQLString,
} = require('graphql');
const { resolver } = require('graphql-sequelize');

const Mission = require('../models/Mission');
const missionType = require('./types/mission');
const { secure } = require('./utils/secure-resolver');

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      mission: {
        type: missionType,
        // args will automatically be mapped to `where`
        args: {
          id: {
            type: new GraphQLNonNull(GraphQLInt),
            description: 'The ID of the mission',
          },
        },
        resolve: resolver(Mission),
      },
      missions: {
        type: new GraphQLList(missionType),
        args: {
          // An arg with the key limit will automatically be converted to a limit on the target
          limit: {
            type: GraphQLInt,
          },
          // An arg with the key order will automatically be converted to a order on the target
          order: {
            type: GraphQLString,
          },
        },
        resolve: resolver(Mission),
      },
    },
  }),
  mutation: new GraphQLObjectType({
    name: 'RootMutationType',
    fields: {
      createMission: {
        type: missionType,
        args: {
          name: {
            description: 'Name of the mission',
            type: new GraphQLNonNull(GraphQLString),
          },
          date: {
            type: GraphQLString,
            description: 'Date of the mission',
          },
          displayDate: {
            type: GraphQLString,
            description: 'Date to display',
          },
        },
        description: 'Creates a new mission',
        resolve: secure((obj, { name, date, displayDate }) => Mission.create({
          name,
          date,
          displayDate,
        })),
      },
    },
  }),
});

module.exports = schema;
