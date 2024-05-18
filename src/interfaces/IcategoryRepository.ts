import { Category } from 'src/models/category.models';
import { AbstractPromise } from './AbstractRepository';

export interface ICategoryRepository extends AbstractPromise<Category> {}
