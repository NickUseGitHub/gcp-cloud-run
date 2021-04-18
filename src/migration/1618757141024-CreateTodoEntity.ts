import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTodoEntity1618757141024 implements MigrationInterface {
    name = 'CreateTodoEntity1618757141024'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "todo" ("id" SERIAL NOT NULL, "name" character varying(200) NOT NULL, "isDone" boolean, CONSTRAINT "PK_d429b7114371f6a35c5cb4776a7" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "todo"`);
    }

}
