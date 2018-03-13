export const authenticatedOnly = (resolver) => (root, args, context) => {
  if (!context.user) {
    throw new Error('User must be authenticated for this request.');
  }

  return resolver(args);
};
