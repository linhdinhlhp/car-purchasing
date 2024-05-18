import {
  Controller,
  Get,
  Res,
  Param,
  Post,
  Body,
  Put,
  ValidationPipe,
  Delete,
} from '@nestjs/common';
import { ResponseData } from 'src/global/globalClass';
import { HttpMessage, HttpStatus } from 'src/global/globalEnum';
import { Category } from 'src/models/category.models';
import { Response } from 'express';
import { ResponseType } from 'src/global/globalType';
import { CategoryService } from './categories.service';
import { CategoryDto } from 'src/dto/category.dto';

@Controller('categories')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}
  @Get()
  async list(@Res() res: Response): Promise<ResponseType<Category>> {
    try {
      return res.json(
        new ResponseData(
          await this.categoryService.findAll(),
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
  ): Promise<ResponseType<Category>> {
    try {
      return res.json(
        new ResponseData(
          await this.categoryService.findById(id),
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
  async createCategory(
    @Body() category: CategoryDto,
    @Res() res: Response,
  ): Promise<any> {
    // console.log(category);
    try {
      return res.json(
        new ResponseData(
          await this.categoryService.create(category),
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
    @Body(new ValidationPipe()) category: CategoryDto,
    @Res() res: Response,
  ): Promise<ResponseType<Category>> {
    try {
      return res.json(
        new ResponseData(
          await this.categoryService.update(id, category),
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
      const isFlag: boolean = await this.categoryService.delete(id);
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
