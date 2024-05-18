import { MinLength, IsNumber } from 'class-validator';

export class CarDto {
  @MinLength(5, { message: 'phai tren 5 ki tu nha' })
  productName: string;

  @IsNumber()
  price?: number;

  @IsNumber()
  category_id?: number;
}
