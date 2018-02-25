/* eslint-disable import/prefer-default-export */
export const secure = resolvers => (...args) => {
  const [, , context] = args;
  if (!context.user) {
    throw new Error('This operation requires authentication');
  }

  return resolvers(...args);
};
