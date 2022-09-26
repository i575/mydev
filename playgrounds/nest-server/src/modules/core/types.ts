import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export type ClassType<T> = { new (...args: any[]): T };
export interface CoreOptions {
  database?: TypeOrmModuleOptions;
}
