import { AppEnvType } from './types';

interface ResultModule {
  NODE_ENV: AppEnvType;
  port: number;
}

export default {
  NODE_ENV: process.env.NODE_ENV || AppEnvType.DEVELOP,
  port: process.env.PORT || 3000,
} as ResultModule;
