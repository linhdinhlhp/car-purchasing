import { Module } from '@nestjs/common';
import { ProductController } from './products.controller';
import { ProductService } from './products.service';
import { CategoryEntity } from '../../entities/category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
