import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        const staticFolder = config.get('STATIC_FILES_PATH');
        const rootPath = join(__dirname, '..', '..', staticFolder);
        return [{ rootPath, exclude: ['/api/(.*)'] }];
      },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `../.env`,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
