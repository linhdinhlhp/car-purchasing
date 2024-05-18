import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarController } from './car.controller';
import { CarService } from './car.service';
import { CarEntity } from 'src/entities/car.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CarEntity])],
  controllers: [CarController],
  providers: [CarService],
})
export class CarModule {}
