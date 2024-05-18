import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CategoryEntity } from './category.entity';

@Entity({
  name: 'car',
})
export class CarEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productName: string;

  @Column()
  price: number;

  @Column()
  category_id: number;

  @ManyToOne(() => CategoryEntity)
  @JoinColumn()
  category: CategoryEntity;
}
