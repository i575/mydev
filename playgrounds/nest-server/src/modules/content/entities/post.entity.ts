import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

/**
 * @description 文章
 */
@Entity('content_posts')
export class PostEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ comment: '文章標題' })
  title!: string;

  @Column({ comment: '文章内容', type: 'text' })
  body!: string;

  @Column({ comment: '文章描述', nullable: true })
  summary?: string;

  @Column({ comment: '關鍵字', type: 'simple-array', nullable: true })
  keywords?: string[];

  @CreateDateColumn({
    comment: '創建時間',
  })
  createdAt!: Date;

  @UpdateDateColumn({
    comment: '更新時間',
  })
  updatedAt!: Date;
}
