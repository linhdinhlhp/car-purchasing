import {
  Controller,
  Get,
  Res,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { ResponseData } from 'src/global/globalClass';
import { HttpMessage, HttpStatus } from 'src/global/globalEnum';
import { Response } from 'express';
import { ResponseType } from 'src/global/globalType';
import { CarService } from './car.service';
import { Car } from 'src/models/car.model';
import { CarDto } from 'src/dto/car.dto';

@Controller('car')
export class CarController {
  constructor(private carService: CarService) {}
  @Get()
  async list(@Res() res: Response): Promise<ResponseType<Car>> {
    try {
      return res.json(
        new ResponseData(
          await this.carService.findAll(),
          HttpStatus.SUCCESS,
          HttpMessage.SUCCESS,
        ),
      );
    } catch (error) {
      return res.json(
        new ResponseData(null, HttpStatus.ERROR, HttpMessage.ERROR),
      );
    }
  }

  @Get('/:id')
  async detail(
    @Param('id') id: number,
    @Res() res: Response,
  ): Promise<ResponseType<Car>> {
    try {
      return res.json(
        new ResponseData(
          await this.carService.findById(id),
          HttpStatus.SUCCESS,
          HttpMessage.SUCCESS,
        ),
      );
    } catch (error) {
      return res.json(
        new ResponseData(null, HttpStatus.ERROR, HttpMessage.ERROR),
      );
    }
  }

  @Post()
  async createCar(@Body() car: CarDto, @Res() res: Response): Promise<any> {
    try {
      return res.json(
        new ResponseData(
          await this.carService.create(car),
          HttpStatus.SUCCESS,
          HttpMessage.SUCCESS,
        ),
      );
    } catch (error) {
      return res.json(
        new ResponseData(null, HttpStatus.ERROR, HttpMessage.ERROR),
      );
    }
  }

  @Put('/:id')
  async update(
    @Param('id') id: number,
    @Body() car: CarDto, //new ValidationPipe()
    @Res() res: Response,
  ): Promise<ResponseType<Car>> {
    try {
      return res.json(
        new ResponseData(
          await this.carService.update(id, car),
          HttpStatus.SUCCESS,
          HttpMessage.SUCCESS,
        ),
      );
    } catch (error) {
      return res.json(
        new ResponseData(null, HttpStatus.ERROR, HttpMessage.ERROR),
      );
    }
  }
  @Delete('/:id')
  async delete(
    @Param('id') id: number,
    @Res() res: Response,
  ): Promise<ResponseType<boolean>> {
    try {
      const isFlag: boolean = await this.carService.delete(id);
      if (isFlag) {
        return res.json(
          new ResponseData(isFlag, HttpStatus.SUCCESS, HttpMessage.SUCCESS),
        );
      } else {
        return res.json(
          new ResponseData(isFlag, HttpStatus.ERROR, HttpMessage.ERROR),
        );
      }
    } catch (error) {
      return res.json(
        new ResponseData(null, HttpStatus.ERROR, HttpMessage.ERROR),
      );
    }
  }
}
