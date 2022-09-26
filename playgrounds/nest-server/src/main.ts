import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());

  // 配置全局 url 前綴
  app.setGlobalPrefix('api');

  await app.listen(3000, '0.0.0.0');
}
bootstrap();
