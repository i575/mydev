import { Module } from '@nestjs/common';

import { ContentModule } from '@/modules/content/content.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ContentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
