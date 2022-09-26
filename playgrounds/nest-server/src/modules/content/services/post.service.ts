import { Injectable } from '@nestjs/common';

import { PostEntity } from '@/modules/content/entities/post.entity';

const posts: PostEntity[] = [
  { title: '第一篇文章标题', body: '第一篇文章内容' },
  { title: '第二篇文章标题', body: '第二篇文章内容' },
  { title: '第三篇文章标题', body: '第三篇文章内容' },
  { title: '第四篇文章标题', body: '第四篇文章内容' },
  { title: '第五篇文章标题', body: '第五篇文章内容' },
  { title: '第六篇文章标题', body: '第六篇文章内容' },
].map((v, id) => ({ ...v, id }));

@Injectable()
export class PostService {
  async findAll() {
    return posts;
  }
}
