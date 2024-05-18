import { CategoryService } from './categories.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryController } from './categories.controller';
import { CategoryEntity } from 'src/entities/category.entity';
import { CategoryRepository } from './categories.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity])],
  controllers: [CategoryController],
  providers: [
    CategoryService,
    {
      useClass: CategoryRepository,
      provide: 'ICategoryRepository',
    },
  ],
})
export class CategoryModule {}
