import fastify from 'fastify';
import { Connection } from 'typeorm';

import configs from '@configs/index';
import { AppEnvType } from '@configs/types';

import todoControllers from '@apis/todos/controllers/index';

import initConnection from './database';

const app = fastify({ logger: configs.NODE_ENV !== AppEnvType.PRODUCTION });

app.get('/healthcheck', async () => {
  return 'ok';
});

todoControllers.forEach(function bindToApp(controller) {
  const { method, url, handler } = controller;

  if (method === 'GET') {
    app.get(url, handler);
  } else if (method === 'POST') {
    app.post(url, handler);
  } else if (method === 'DELETE') {
    app.delete(url, handler);
  }
});

export default async function bootstrap() {
  let connection: Connection | null = null;
  try {
    connection = await initConnection();
    const port = configs.port;
    console.log(`Server listen on port -- ${port}`);

    await app.listen(port, '0.0.0.0');
  } catch (err) {
    connection && connection.close();
    app.log.error(err);
    process.exit(1);
  }
}
