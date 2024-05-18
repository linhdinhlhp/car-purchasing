import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { CarEntity } from './car.entity';

@Entity({
  name: 'category',
})
export class CategoryEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  categoryName: string;

  @Column()
  description: string;

  @OneToMany(() => CarEntity, (cars) => cars.category)
  @JoinColumn()
  cars: CarEntity[];
}
