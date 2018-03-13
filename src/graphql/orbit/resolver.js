import { authenticatedOnly } from '../helpers';
import { Orbit } from '../../init/db';

// eslint-disable-next-line import/prefer-default-export
export const resolver = {
  Query: {
    orbit: (r, { acronym }) => Orbit.findOne({ where: { acronym } }),
    orbits: () => Orbit.findAll(),
  },
  Mutation: {
    createOrbit: authenticatedOnly(async ({ orbit }) => {
      const { acronym, altitudeKm, ...rest } = orbit;

      const data = {
        acronym,
        altitudeMinKm: altitudeKm && altitudeKm.min,
        altitudeMaxKm: altitudeKm && altitudeKm.max,
        ...rest,
      };

      const alreadyExists = await Orbit.count({ where: { acronym } });

      if (alreadyExists) {
        return Orbit.update(data, { where: { acronym } }).then(() => Orbit.findOne({ where: { acronym } }));
      }

      return Orbit.build(data).save();
    }),
  },
  Orbit: {
    altitudeKm: (orbit) => ({
      min: orbit.altitudeMinKm,
      max: orbit.altitudeMaxKm,
    }),
  },
};
