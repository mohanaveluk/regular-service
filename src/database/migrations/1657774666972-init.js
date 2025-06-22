"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init1657774666972 = void 0;
const typeorm_1 = require("typeorm");
class init1657774666972 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'roles',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'name',
                    type: 'varchar',
                    length: '100',
                    isNullable: false,
                },
                {
                    name: 'rguid',
                    type: 'varchar',
                    length: '100',
                    isNullable: false,
                },
            ],
        }), true);
        await queryRunner.query(`
          INSERT INTO roles (name, rguid) VALUES 
          ('user',    '7a7d386d-ba2d-4c72-923f-973821bc048d')
          ,('admin',   'd5306fc7-fffb-413c-bd4e-5683a952f2a5')
          ,('manager', 'bb12db75-107c-41d0-9a7a-6ed3f52088a4');
          `);
    }
    async down(queryRunner) {
    }
}
exports.init1657774666972 = init1657774666972;
//# sourceMappingURL=1657774666972-init.js.map