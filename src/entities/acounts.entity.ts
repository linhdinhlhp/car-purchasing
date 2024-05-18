import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'accounts',
})
export class AccountEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  permission: string;

  @Column()
  isActive: boolean;
}
