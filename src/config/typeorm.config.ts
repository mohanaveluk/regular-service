import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { DatabaseConfig } from './types/database.config';

export const typeOrmConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => {
  const dbConfig = configService.get<DatabaseConfig>('database');
  
    
  if (!dbConfig) {
    throw new Error('Database configuration not found');
  }
  
  return {
    type: 'mysql',
    host: dbConfig.host,
    port: dbConfig.port,
    username: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.database,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: dbConfig.synchronize,
    logging: dbConfig.logging,
    migrationsRun: dbConfig.migrationsRun,
    migrations: dbConfig.migrations,
    autoLoadEntities: dbConfig.autoLoadEntities,
    // Connection pooling options
    extra: {
      connectionLimit: 10,
      connectTimeout: 10000,
    },
  };
};