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
  {
    method: 'POST',
    url: '/apis/todos',
    handler: async (request) => {
      const { body } = request as {
        body: {
          name: string;
          isDone: boolean;
        };
      };

      const todo = Todo.create({
        name: body.name,
        isDone: Boolean(body.isDone),
      });

      await todo.save();

      return body;
    },
  },
  {
    method: 'DELETE',
    url: '/apis/todos/:id',
    handler: async (request) => {
      const { params } = request as {
        params: {
          id: string;
        };
      };

      await Todo.delete(Number(params.id));

      return {};
    },
  },
];

export default controllers;
