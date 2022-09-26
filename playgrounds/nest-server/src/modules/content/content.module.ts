import { Module } from '@nestjs/common';

import { PostController } from '@/modules/content/controllers/post.controller';
import { PostService } from '@/modules/content/services/post.service';

@Module({
  providers: [PostService],
  controllers: [PostController],
  exports: [PostService],
})
export class ContentModule {}
