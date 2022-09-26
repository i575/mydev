import { Module } from '@nestjs/common';

import { database } from '@/config';
import { ContentModule } from '@/modules/content/content.module';
import { CoreModule } from '@/modules/core/core.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [CoreModule.forRoot({ database: database() }), ContentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
