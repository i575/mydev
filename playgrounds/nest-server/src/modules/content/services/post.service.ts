import { Injectable, NotFoundException } from '@nestjs/common';
import { omit } from 'lodash';

import { CreatePostDto, UpdatePostDto } from '../dtos';
import { PostRepository } from '../repositories';

/**
 * @description 文章
 */
@Injectable()
export class PostService {
  constructor(private postRepository: PostRepository) {}

  async findList() {
    return this.postRepository.find();
  }

  async findOne(id: string) {
    return this.postRepository.findOneOrFail({ where: { id } });
  }

  async create(data: CreatePostDto) {
    const item = await this.postRepository.save(data);

    return this.findOne(item.id);
  }

  async update(data: UpdatePostDto) {
    await this.postRepository.update(data.id, omit(data, ['id']));

    return this.findOne(data.id);
  }

  async delete(id: string) {
    const post = await this.postRepository.findOne({ where: { id } });

    if (!post) throw new NotFoundException(`Post ${id} not exists!`);

    return this.postRepository.remove(post);
  }
}
