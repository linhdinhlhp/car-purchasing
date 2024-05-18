import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from 'src/entities/category.entity';
import { ICategoryRepository } from 'src/interfaces/IcategoryRepository';
import { Category } from 'src/models/category.models';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class CategoryRepository implements ICategoryRepository {
  constructor(
    @InjectRepository(CategoryEntity)
    private categoryRepository: Repository<CategoryEntity>,
  ) {}
  async findAll(): Promise<Category[]> {
    return await this.categoryRepository.find();
  }

  // eslint-disable-next-line prettier/prettier
  async findById(id : number): Promise<Category> {
    return await this.categoryRepository.findOne({ where: { id } });
  }
  // eslint-disable-next-line prettier/prettier
    async create(category: Category): Promise<Category> {
    return await this.categoryRepository.save(category);
  }
  async update(id: number, category: Category): Promise<Category> {
    await this.categoryRepository.update(id, category);
    return this.findById(id);
  }
  async delete(id: number): Promise<boolean> {
    const isFlag: DeleteResult = await this.categoryRepository.delete(id);
    return isFlag.affected === 1;
  }
}
