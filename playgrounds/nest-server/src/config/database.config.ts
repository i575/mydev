import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const database: () => TypeOrmModuleOptions = () => ({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'frank123456',
  database: 'nestserver',
  entities: [],
  // 自動加載模塊中註冊的 entity
  autoLoadEntities: true,
  // 可以在webpack熱更時保持連接，目前用不到
  keepConnectionAlive: true,
  // 可以在開發環境下同步 entity的數據結構到數據庫
  synchronize: process.env.NODE_ENV !== 'production',
});
