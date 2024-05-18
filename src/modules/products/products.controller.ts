import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ValidationPipe,
} from '@nestjs/common';
import { ProductService } from './products.service';
import { ResponseData } from 'src/global/globalClass';
import { HttpStatus, HttpMessage } from 'src/global/globalEnum';
import { Product } from 'src/models/product.model';
import { ProductDto } from 'src/dto/product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getProduct(): ResponseData<Product[]> {
    try {
      return new ResponseData<Product[]>(
        this.productService.getProduct(),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<Product[]>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }

  @Post()
  createProduct(
    @Body(new ValidationPipe()) productDto: Product,
  ): ResponseData<Product> {
    try {
      return new ResponseData<Product>(
        this.productService.createProduct(productDto),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<Product>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }

  @Get('/:id')
  detailProduct(@Param('id') id: number): ResponseData<Product> {
    try {
      return new ResponseData<Product>(
        this.productService.detailProduct(id),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<Product>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }

  @Put('/:id')
  updateProduct(
    @Body() productDto: ProductDto,
    @Param('id') id: number,
  ): ResponseData<Product> {
    try {
      return new ResponseData<Product>(
        this.productService.updateProduct(productDto, id),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<Product>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }

  @Delete('/:id')
  deleteProduct(@Param('id') id: number): ResponseData<boolean> {
    try {
      return new ResponseData<boolean>(
        this.productService.deleteProduct(id),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<boolean>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }
}
