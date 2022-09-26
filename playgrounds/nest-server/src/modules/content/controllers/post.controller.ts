import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';

import { CreatePostDto, UpdatePostDto } from '../dtos';
import { PostService } from '../services';

@Controller('posts')
export class PostController {
  constructor(protected postService: PostService) {}

  @Get()
  async index() {
    return this.postService.findList();
  }

  @Get(':post')
  async show(@Param('post', new ParseUUIDPipe()) post: string) {
    return this.postService.findOne(post);
  }

  @Post()
  async store(
    @Body(
      new ValidationPipe({
        transform: true,
        forbidUnknownValues: true,
        validationError: { target: false },
        groups: ['create'],
      }),
    )
    data: CreatePostDto,
  ) {
    return this.postService.create(data);
  }

  @Patch()
  async update(
    @Body(
      new ValidationPipe({
        transform: true,
        forbidUnknownValues: true,
        validationError: { target: false },
        groups: ['update'],
      }),
    )
    data: UpdatePostDto,
  ) {
    return this.postService.update(data);
  }

  @Delete(':post')
  async destroy(
    @Param('post', new ParseUUIDPipe())
    post: string,
  ) {
    return this.postService.delete(post);
  }
}
