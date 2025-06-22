import { TypeOrmModuleOptions  } from '@nestjs/typeorm';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { join } from 'path';
require('dotenv').config();

const ormConfig : MysqlConnectionOptions = {
    type: 'mysql',
    host: process.env.DB_HOST || '34.61.116.54',
    port: parseInt(process.env.DB_PORT) || 3306,
    username: process.env.DB_USERNAME || 'appuser',
    password: process.env.DB_PASSWORD || 'kalavai@071972',
    database: process.env.DB_DATABASE || 'collegedb',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: false,
    logging: false,
    logger: 'simple-console',
    migrationsRun: false,
    migrations: [join(__dirname, '..', 'database', 'migrations', '*{.ts,.js}')],

  };
  
  console.log(JSON.stringify(ormConfig));
  export default ormConfig;
  