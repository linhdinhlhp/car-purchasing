import { MinLength, IsNotEmpty, IsNumber } from 'class-validator';

export class ProductDto {
  @IsNotEmpty({ message: 'moi nhap id bat buoc la so, ko de rong' })
  id?: number;

  @MinLength(5, { message: 'phai tren 5 ki tu nha' })
  productName?: string;

  @IsNumber()
  price?: number;
}
