import { config } from 'dotenv';
import path from 'path';
import { AppEnvType } from './types';

config({ path: path.resolve(__dirname, '../../.env') });

interface Configs {
  NODE_ENV: AppEnvType;
  port: number;
  DB_HOST: string;
  DB_PORT: number;
  DB_USERNAME: string;
  DB_PASSWORD: string;
  DB_DATABASE: string;
}

const configs: Configs = {
  NODE_ENV: (process.env.NODE_ENV || AppEnvType.DEVELOP) as AppEnvType,
  port: Number(process.env.PORT || 3000),
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_PORT: Number(process.env.DB_PORT || 5432),
  DB_USERNAME: process.env.DB_USERNAME || 'postgres',
  DB_PASSWORD: process.env.DB_PASSWORD || '',
  DB_DATABASE: process.env.DB_DATABASE || 'dbapp',
};

export default configs;
