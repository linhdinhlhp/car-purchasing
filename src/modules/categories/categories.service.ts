import { Inject, Injectable } from '@nestjs/common';
import { ICategoryRepository } from 'src/interfaces/IcategoryRepository';
import { Category } from 'src/models/category.models';

@Injectable()
export class CategoryService {
  constructor(
    @Inject('ICategoryRepository')
    private readonly categoryRepository: ICategoryRepository,
  ) {}
  async findAll(): Promise<Category[]> {
    return await this.categoryRepository.findAll();
  }

  // eslint-disable-next-line prettier/prettier
  async findById(id : number): Promise<Category> {
    return await this.categoryRepository.findById(id);
  }
  // eslint-disable-next-line prettier/prettier
    async create(category: Category): Promise<Category> {
    return await this.categoryRepository.create(category);
  }
  async update(id: number, category: Category): Promise<Category> {
    await this.categoryRepository.update(id, category);
    return this.findById(id);
  }
  async delete(id: number): Promise<boolean> {
    return await this.categoryRepository.delete(id);
  }
}
