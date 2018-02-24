import { Router } from 'express';
import facets from './facets';

export default ({ config, db }) => {
  const api = Router();

  // mount the facets resource
  api.use('/facets', facets({ config, db }));

  return api;
};
