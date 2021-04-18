import { HTTPMethods, RouteHandlerMethod } from 'fastify';

export interface Controller {
  method: HTTPMethods;
  url: string;
  handler: RouteHandlerMethod;
}
