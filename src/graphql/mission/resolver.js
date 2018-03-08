import { Mission } from '../../init/db';

// eslint-disable-next-line import/prefer-default-export
export const resolver = {
  Query: {
    mission: (r, { id }) => Mission.findById(id),
    missions: () => Mission.findAll(),
  },
  Mutation: {
    createMission: async (r, { mission }, c) => {
      if (!c.user) {
        throw new Error();
      }

      return Mission.build(mission).save();
    },
  },
};