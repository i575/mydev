import { Injectable } from '@nestjs/common';
import { IsNotEmpty, IsOptional, MaxLength } from 'class-validator';

@Injectable()
export class CreatePostDto {
  @MaxLength(255, {
    always: true,
    message: '文章標題最多為$constraint1字符',
  })
  @IsNotEmpty({ groups: ['create'], message: '文章標題為必填' })
  @IsOptional({ groups: ['update'] })
  title!: string;

  @IsNotEmpty({ groups: ['create'], message: '文章内容為必填' })
  @IsOptional({ groups: ['update'] })
  body!: string;

  @MaxLength(500, {
    always: true,
    message: '文章描述最多為$constraint1字符',
  })
  @IsOptional({ always: true })
  summary?: string;

  @MaxLength(20, {
    each: true,
    always: true,
    message: '每個關鍵字長度為$constraint1字符',
  })
  @IsOptional({ always: true })
  keywords?: string[];
}
