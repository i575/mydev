import { Controller, Get } from '@nestjs/common';

import { PostService } from '@/modules/content/services/post.service';

@Controller('posts')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  async index() {
    return this.postService.findAll();
  }
}
