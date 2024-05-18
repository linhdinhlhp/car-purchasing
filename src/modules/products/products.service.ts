import { Injectable } from '@nestjs/common';
import { ProductDto } from 'src/dto/product.dto';

import { Product } from 'src/models/product.model';
@Injectable()
export class ProductService {
  private products: Product[] = [
    { id: 1, categoryId: 2, price: 8000, productName: 'keyboard' },
    { id: 2, categoryId: 4, price: 80000, productName: 'ModulesContaine' },
    { id: 3, categoryId: 5, price: 80000, productName: 'nail' },
  ];

  getProduct(): Product[] {
    return this.products;
  }

  createProduct(productDto: ProductDto): Product {
    const product: Product = {
      categoryId: Math.random(),
      ...productDto,
    };
    this.products.push(product);
    return product;
  }

  // tìm chi tiết 1 sản phẩm theo id
  /**
   *
   * @param id truyem id  de tim chi tiet 1 san pham
   * @returns
   */
  detailProduct(id: number): Product {
    return this.products.find((item) => item.id === Number(id));
  }

  updateProduct(productDto: ProductDto, id: number): Product {
    const index = this.products.findIndex((item) => item.id === Number(id));
    this.products[index].id = productDto.id;
    this.products[index].productName = productDto.productName;
    this.products[index].price = productDto.price;
    return this.products[index];
  }

  deleteProduct(id: number): boolean {
    const index = this.products.findIndex((item) => item.id === Number(id));
    if (index !== -1) {
      this.products.splice(index, 1);
      return true;
    }
    return false;
  }
}
