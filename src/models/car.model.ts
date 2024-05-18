export class Car {
  categoryId?: number;
  carName?: string;
  price?: number;
  description?: string;

  constructor({ categoryId, carName, price, description }) {
    if (categoryId !== null) this.categoryId = categoryId;
    if (carName !== null) this.carName = carName;
    if (price !== null) this.price = price;
    if (description !== null) this.description = description;
    return this;
  }
}
