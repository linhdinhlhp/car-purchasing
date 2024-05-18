export class Category {
  categoryName?: string;
  description?: string;

  constructor({ categoryName, description }) {
    if (categoryName !== null) this.categoryName = categoryName;
    if (description !== null) this.description = description;
    return this;
  }
}
