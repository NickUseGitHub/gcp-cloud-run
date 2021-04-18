import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 200, nullable: false })
  name: string;

  @Column('boolean', { nullable: true })
  isDone: boolean;
}
