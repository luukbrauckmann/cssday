export function onRequest ({ locals, request }: any, next: () => any) {
  locals.json = (data: any) => JSON.stringify(data, null, 2);
  return next();
};