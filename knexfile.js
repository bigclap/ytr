const path = require('path');

const BASE_PATH = path.join(__dirname, 'database');

const dbconfig = require('./database/database.json').pg;

module.exports = {
  development: {
    client: dbconfig.driver,
    connection: `postgres://${dbconfig.user}:${dbconfig.password}@${dbconfig.host}:${dbconfig.port || '5432'}/${dbconfig.database}`,
    migrations: {
      directory: path.join(BASE_PATH, 'migrations'),
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds'),
    },
  },
  production: {
    client: dbconfig.driver,
    connection: `postgres://${dbconfig.user}:${dbconfig.password}@${dbconfig.host}:${dbconfig.port || '5432'}/${dbconfig.database}`,
    migrations: {
      directory: path.join(BASE_PATH, 'migrations'),
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds'),
    },
  },
};
