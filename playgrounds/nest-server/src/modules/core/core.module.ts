import { DynamicModule, ModuleMetadata, Provider, Type } from '@nestjs/common';
import { getDataSourceToken, TypeOrmModule } from '@nestjs/typeorm';
import { DataSource, ObjectType } from 'typeorm';

import { CUSTOM_REPOSITORY_METADATA } from '@/modules/core/constants';
import { CoreOptions } from '@/modules/core/types';

export class CoreModule {
  /**
   * @description 註冊Core模塊
   */
  public static forRoot(options: CoreOptions = {}): DynamicModule {
    const imports: ModuleMetadata['imports'] = [];

    if (options.database) imports.push(TypeOrmModule.forRoot(options.database));

    return {
      global: true,
      imports,
      module: CoreModule,
    };
  }

  /**
   * @description 註冊自定義 Repository
   * @param repositories 需要註冊的自定義類列表
   * @param dataSourceName 數據池名稱，默認為長連接
   */
  public static forRepository<T extends Type<any>>(
    repositories: T[],
    dataSourceName?: string,
  ): DynamicModule {
    const providers: Provider[] = [];

    for (const Repo of repositories) {
      const entity = Reflect.getMetadata(CUSTOM_REPOSITORY_METADATA, Repo);

      if (!entity) continue;

      providers.push({
        inject: [getDataSourceToken(dataSourceName)],
        provide: Repo,
        useFactory: (dataSource: DataSource): typeof Repo => {
          const base = dataSource.getRepository<ObjectType<any>>(entity);

          return new Repo(base.target, base.manager, base.queryRunner);
        },
      });
    }

    return {
      exports: providers,
      module: CoreModule,
      providers,
    };
  }
}
