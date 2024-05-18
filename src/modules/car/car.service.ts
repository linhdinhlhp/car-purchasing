import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CarEntity } from 'src/entities/car.entity';
import { Car } from 'src/models/car.model';

import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(CarEntity)
    private carRepository: Repository<CarEntity>,
  ) {}
  async findAll(): Promise<Car[]> {
    return await this.carRepository.find();
  }

  // eslint-disable-next-line prettier/prettier
  async findById(id : number): Promise<Car> {
    return await this.carRepository.findOne({ where: { id } });
  }
  // eslint-disable-next-line prettier/prettier
    async create(car: Car): Promise<Car> {
    return await this.carRepository.save(car);
  }
  async update(id: number, car: Car): Promise<Car> {
    await this.carRepository.update(id, car);
    return this.findById(id);
  }
  async delete(id: number): Promise<boolean> {
    const isFlag: DeleteResult = await this.carRepository.delete(id);
    return isFlag.affected === 1;
  }
}
