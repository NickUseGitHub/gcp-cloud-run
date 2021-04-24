import configs from './configs';

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_URL, DB_EXTRA_HOST } = configs;

export default {
  type: 'postgres',
  port: DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  entities: [`${__dirname}/**/entity/*.ts`, `${__dirname}/**/entity/*.js`],
  migrations: [`${__dirname}/migration/*.ts`, `${__dirname}/migration/*.js`],
  cli: {
    migrationsDir: 'migration',
  },
  ...(DB_HOST ? { host: DB_HOST } : {}),
  ...(DB_URL ? { url: DB_URL } : {}),
  ...(DB_EXTRA_HOST
    ? {
        extra: {
          host: DB_EXTRA_HOST,
        },
      }
    : {}),
};
