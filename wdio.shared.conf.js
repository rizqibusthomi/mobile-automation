export const config = {
  runner: 'local',
  framework: 'mocha',
  specs: ['./test/specs/**/*.js'],
  maxInstances: 1,
  logLevel: 'info',
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  }
};
