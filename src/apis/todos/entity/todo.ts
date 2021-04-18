import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

export const tableName = 'todo';

@Entity({
  name: tableName,
})
export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 200, nullable: false })
  name: string;

  @Column('boolean', { nullable: true })
  isDone: boolean;
}
