import { createConnection, Connection } from 'typeorm';
import ormconfig from '../ormconfig';

export default async function initConnection(): Promise<Connection> {
  return createConnection({
    type: ormconfig.type as 'postgres',
    host: ormconfig.host,
    port: Number(ormconfig.port),
    username: ormconfig.username,
    password: ormconfig.password,
    database: ormconfig.database,
  });
}
