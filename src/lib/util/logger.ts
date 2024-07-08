const template = (message: string) => `
 |----logger----------|
 | ${message}
 |--------------------|
`;
const log = (message: string) => {
  console.log(template(message));
};
// logging type
const error = (message: string) => {
  logger.error(message);
};
const success = (message: string) => {
  log(message);
};
// export
const logger = {
  error,
  success,
};
export { logger };
