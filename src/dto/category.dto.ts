import { MinLength, IsString } from 'class-validator';

export class CategoryDto {
  @MinLength(5, { message: 'phai tren 5 ki tu nha' })
  categoryName: string;

  @IsString()
  description: string;
}
