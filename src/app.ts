import fastify from 'fastify';
import { Connection } from 'typeorm';

import configs from '@configs/index';
import { AppEnvType } from '@configs/types';
import initConnection from './database';

const app = fastify({ logger: configs.NODE_ENV !== AppEnvType.PRODUCTION });

app.get('/', async () => {
  return { hello: 'world' };
});

export default async function bootstrap() {
  let connection: Connection | null = null;
  try {
    connection = await initConnection();
    const port = configs.port;
    console.log(`Server listen on port -- ${port}`);

    await app.listen(port);
  } catch (err) {
    connection && connection.close();
    app.log.error(err);
    process.exit(1);
  }
}
