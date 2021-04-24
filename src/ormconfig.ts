import configs from './configs';

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = configs;

export default {
  type: 'postgres',
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  entities: [`${__dirname}/**/entity/*.ts`, `${__dirname}/**/entity/*.js`],
  migrations: [`${__dirname}/migration/*.ts`, `${__dirname}/migration/*.js`],
  cli: {
    migrationsDir: 'migration',
  },
};
