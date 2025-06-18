import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { adminConfig, databaseConfig, googleCloudConfig, jwtConfig, smtpConfig } from './config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
        ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`, 
      load: [databaseConfig, jwtConfig, adminConfig, googleCloudConfig, smtpConfig],
      isGlobal: true,
    }),
    // TypeOrmModule.forRootAsync({
    //   inject: [ConfigService],
    //   useFactory: (configService: ConfigService) => (getDatabaseConfig(configService)),
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}