import { config } from 'dotenv';
import path from 'path';
import { AppEnvType } from './types';

config({ path: path.resolve(__dirname, '../.env') });

interface Configs {
  NODE_ENV: AppEnvType;
  port: number;
}

const configs: Configs = {
  NODE_ENV: (process.env.NODE_ENV || AppEnvType.DEVELOP) as AppEnvType,
  port: Number(process.env.PORT || 3000),
};

export default configs;
