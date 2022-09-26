import { SetMetadata } from '@nestjs/common';
import { ObjectType } from 'typeorm';

import { CUSTOM_REPOSITORY_METADATA } from '@/modules/core/constants';

export const CustomRepository = <T>(entity: ObjectType<T>): ClassDecorator =>
  SetMetadata(CUSTOM_REPOSITORY_METADATA, entity);
