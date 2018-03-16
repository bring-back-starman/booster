import { Mission } from '../../init/db';
import { authenticatedOnly } from '../helpers';

// eslint-disable-next-line import/prefer-default-export
export const resolver = {
  Query: {
    mission: (r, { id }) => Mission.findById(id),
    missions: (r, { limit = 10, offset, page = 1, type }) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const dateFrom = type === 'UPCOMING' ? { $gte: today } : { $lt: today };

      return Mission.findAll({
        where: {
          dateFrom,
        },
        limit,
        offset: offset || ((page - 1) * limit),
      });
    },
  },
  Mutation: {
    createMission: authenticatedOnly(async ({ mission }) => {
      const { id, date, ...rest } = mission;

      const data = {
        dateFrom: date && date.from,
        dateTo: date && date.to,
        dateType: date && date.type,
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
