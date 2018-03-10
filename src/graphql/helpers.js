export const authenticatedOnly = (resolver) => (root, args, context) => {
  if (!context.user) {
    throw new Error();
  }

  return resolver(args);
};
