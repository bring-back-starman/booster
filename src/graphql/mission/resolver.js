import { authenticatedOnly } from '../helpers';
import { Mission } from '../../init/db';

// eslint-disable-next-line import/prefer-default-export
export const resolver = {
  Query: {
    mission: (r, { id }) => Mission.findById(id),
    missions: () => Mission.findAll(),
  },
  Mutation: {
    createMission: authenticatedOnly(async ({ mission }) => {
      const { id, date, ...rest } = mission;

      const data = {
        dateFrom: date.from,
        dateTo: date.to,
        dateType: date.type,
        ...rest,
      };

      if (id) {
        return Mission.update(data, { where: { id } }).then(() => Mission.findById(id));
      }

      return Mission.build(data).save();
    }),
    deleteMission: authenticatedOnly(async ({ id }) =>
      Mission.destroy({ where: { id } }),
    ),
    deleteMissions: authenticatedOnly(async () =>
      Mission.destroy({ truncate: true }),
    ),
  },
  Mission: {
    date: (mission) => ({
      from: mission.dateFrom,
      to: mission.dateTo,
      type: mission.dateType,
    }),
  },
};
