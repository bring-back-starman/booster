import { Mission } from '../../init/db';
import { authenticatedOnly } from '../helpers';

// eslint-disable-next-line import/prefer-default-export
export const resolver = {
  Query: {
    mission: (r, { id }) => Mission.findById(id),
    missions: (r, { limit, offset, page, type, order }) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      let where = {};

      switch (type) {
        case 'UPCOMING':
          where = { dateTo: { $gte: today } };
          break;
        case 'PAST':
          where = { dateTo: { $lt: today } };
      }

      console.log('order:', order);
      return Mission.findAll({
        where,
        limit,
        offset: offset || ((page - 1) * limit),
        order: [['dateTo', order]],
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
      from: mission.dateFrom && mission.dateFrom.toISOString(),
      to: mission.dateTo && mission.dateTo.toISOString(),
      type: mission.dateType,
    }),
  },
};
