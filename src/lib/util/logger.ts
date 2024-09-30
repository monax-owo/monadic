const template = (message: string) => `
 |----logger----------|
 | ${message}
 |--------------------|
`;
const log = (message: string) => {
  console.log(template(message));
};

// logging type
const dev = (message: string, ...optionalParams: unknown[]) => {
  console.log(message, optionalParams);
};
const error = (message: string, ...optionalParams: unknown[]) => {
  console.error(message, optionalParams);
  throw new Error(message);
};
const success = (message: string, ...optionalParams: unknown[]) => {
  console.log(message, optionalParams);
};

// export
const logger = {
  log,
  dev,
  error,
  success,
};
export { logger };
