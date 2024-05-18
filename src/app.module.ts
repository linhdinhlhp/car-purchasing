import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './modules/categories/categories.module';
import { ProductModule } from './modules/products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from './entities/category.entity';
import { DataSource } from 'typeorm';
import { CarEntity } from './entities/car.entity';
import { AccountEntity } from './entities/acounts.entity';
import { CarModule } from './modules/car/car.module';

@Module({
  imports: [
    CategoryModule,
    ProductModule,
    CarModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 33093,
      username: 'root',
      password: 'root',
      database: 'mysql_ld',
      entities: [CategoryEntity, CarEntity, AccountEntity],
      synchronize: true, //dung migriation de ko dc edit data bua
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
