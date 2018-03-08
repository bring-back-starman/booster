import { Mission } from '../../init/db';

// eslint-disable-next-line import/prefer-default-export
export const resolver = {
  Query: {
    missions: () => Mission.findAll(),
  },
  Mutation: {
    createMission: async (r, { mission }) => {
      return Mission.build(mission).save();
    },
  },
};