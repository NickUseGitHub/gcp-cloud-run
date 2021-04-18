import { Controller } from '@apis/types';
import getManyAndCount, { SelectQueryBuilderCondition } from '@utils/entityRepositoryManager/getManyAndCount';
import { Todo, tableName } from '../entity/todo';

const controllers: Controller[] = [
  {
    method: 'GET',
    url: '/apis/todos',
    handler: async () => {
      const selectFields: SelectQueryBuilderCondition<Todo> = (selectQueryBuilder) => {
        return selectQueryBuilder.select([`${tableName}.id`, `${tableName}.name`, `${tableName}.isDone`]);
      };

      const todoList = await getManyAndCount<Todo>({
        entity: Todo,
        tableName,
        limit: 10,
        skip: 0,
        queryBuilderConditions: [selectFields],
      });

      return todoList;
    },
  },
];

export default controllers;
