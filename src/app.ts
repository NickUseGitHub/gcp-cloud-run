import fastify from 'fastify';

import configs from '@configs/index';
import { AppEnvType } from '@configs/types';

const app = fastify({ logger: configs.NODE_ENV !== AppEnvType.PRODUCTION });

app.get('/', async () => {
  return { hello: 'world' };
});

export default async function start() {
  try {
    const port = configs.port;
    console.log(`Server listen on port -- ${port}`);

    await app.listen(port);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}
