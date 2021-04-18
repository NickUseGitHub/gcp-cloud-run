import { getConnection, ObjectType, SelectQueryBuilder } from 'typeorm';

export type SelectQueryBuilderCondition<T> = (
  queryBuilderFn: SelectQueryBuilder<T>,
) => SelectQueryBuilder<T>;

interface GetManyAndCountParams<T> {
  entity: ObjectType<T>;
  tableName: string;
  skip: number;
  limit: number;
  queryBuilderConditions?: SelectQueryBuilderCondition<T>[];
}

export default async function getManyAndCount<T>({
  entity,
  tableName,
  skip,
  limit,
  queryBuilderConditions,
}: GetManyAndCountParams<T>) {
  let baseRepository = getConnection()
    .getRepository(entity)
    .createQueryBuilder(tableName);

  if (queryBuilderConditions && queryBuilderConditions.length > 0) {
    baseRepository = queryBuilderConditions.reduce(function bindQueryBuilder(
      prevRepository: SelectQueryBuilder<T>,
      queryBuilderFn: SelectQueryBuilderCondition<T>,
    ) {
      return queryBuilderFn(prevRepository);
    },
    baseRepository);
  }

  return baseRepository
    .skip(skip)
    .take(limit)
    .getManyAndCount();
}
