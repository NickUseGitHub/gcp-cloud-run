import { createConnection, Connection } from 'typeorm';
import ormconfig from '../ormconfig';

export default async function initConnection(): Promise<Connection> {
  return createConnection({
    type: ormconfig.type as 'postgres',
    port: Number(ormconfig.port),
    username: ormconfig.username,
    password: ormconfig.password,
    database: ormconfig.database,
    entities: ormconfig.entities,
    ...(ormconfig.host ? { host: ormconfig.host } : {}),
    ...(ormconfig.url ? { url: ormconfig.url } : {}),
    ...(ormconfig.extra ? { extra: ormconfig.extra } : {}),
  });
}
