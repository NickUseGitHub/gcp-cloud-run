import { Controller } from '@apis/types';

const controllers: Controller[] = [
  {
    method: 'GET',
    url: '/apis/todos',
    handler: async () => {
      return { hello: 'This is todo' };
    },
  },
];

export default controllers;
