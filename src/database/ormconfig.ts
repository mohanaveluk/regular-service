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
    synchronize: process.env.NODE_ENV === 'production' ? false : true, // never use synchronize in production
    // logging: true, // enable logging for debugging    
    logging: true, // enable logging for debugging
    logger: 'advanced-console',
    migrationsRun: false,
    migrations: [__dirname + '/database/migrations/**/*.{ts,js}'],

  };
  
  console.log(JSON.stringify(ormConfig));
  export default ormConfig;
  