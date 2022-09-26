import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CoreModule } from '../core/core.module';
import { PostController } from './controllers';
import { CreatePostDto, UpdatePostDto } from './dtos';
import { PostEntity } from './entities/post.entity';
import { PostRepository } from './repositories';
import { PostService } from './services';

@Module({
  imports: [
    TypeOrmModule.forFeature([PostEntity]),
    // 註冊自定義Repository
    CoreModule.forRepository([PostRepository]),
  ],
  providers: [PostService, CreatePostDto, UpdatePostDto],
  controllers: [PostController],
  exports: [
    PostService,
    // 導出自定義Repository
    CoreModule.forRepository([PostRepository]),
  ],
})
export class ContentModule {}
