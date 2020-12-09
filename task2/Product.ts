import { v4 as uuid } from 'uuid';
import { isStringIsEmpty, isNotNan, isPositiveNumber } from './validation';
import { isElementExistInArray } from './utils';

interface IProduct {
  id: string;
  name: string;
  price: number;
  initialCategory: string;
  discountedPrice: number;
  categories: string[];
  discount: number;
  quantity: number;
  read(): string;
  addDiscount(discount: number): string;
  addCategory(category: string): void;
  removeCategory(category: string): void;
  update(key: string, value: number | string): string | void;
}

class Product implements IProduct {
  public id = uuid();
  public name: string;
  public price: number;
  public initialCategory: string;
  public discountedPrice: number;
  public categories: string[];
  public discount = 0;
  public quantity = 1;

  constructor(name: string, price: number, initialCategory: string) {
    isStringIsEmpty(name);
    isNotNan(price);
    isStringIsEmpty(initialCategory);
    this.name = name;
    this.price = price;
    this.initialCategory = initialCategory;
    this.discountedPrice = price;
    this.categories = [initialCategory];
  }

  read(): string {
    return `
          Id: ${this.id}
          Name: ${this.name}
          Price: ${this.price}
          Quantity: ${this.quantity}
          Discount: ${this.discount}
          Category: ${this.initialCategory}`;
  }

  addDiscount(discount: number): string {
    isPositiveNumber(discount);
    this.discount = discount;
    const finalPrice = this.price - (discount * this.price) / 100;
    this.discountedPrice = finalPrice;
    return `Product ID: ${this.id} now costs ${finalPrice}`;
  }

  addCategory(category: string): void {
    isStringIsEmpty(category);
    const smallCategories = this.categories.map((el) => el.toLowerCase());
    const smallCategory = category.toLowerCase();
    if (smallCategories.includes(smallCategory)) {
      throw new Error('This category already exist');
    }
    this.categories.push(category);
  }

  removeCategory(category: string): void {
    isStringIsEmpty(category);
    const smallCategories = this.categories.map((el) => el.toLowerCase());
    const smallCategory = category.toLowerCase();
    const categoryIndex = smallCategories.indexOf(smallCategory);
    if (categoryIndex === -1) {
      throw new Error('Category does not exist');
    }
    this.categories.splice(categoryIndex, 1);
  }

  update(key: string, value: number | string): string | void {
    isStringIsEmpty(key);
    if (isElementExistInArray(key, ['name', 'price'])) {
      throw new Error('this key is not able to change');
    }
    const smallKey = key.toLowerCase();
    if (smallKey === 'price' && typeof value === 'number') {
      isNotNan(value);
      let keyValue: number | string = this[smallKey];
      keyValue = value;
      return 'Product was updated';
    } else if (value === 'string') {
      isStringIsEmpty(value);
      this[smallKey] = value;
      return 'Product was updated';
    }
    throw new Error('Product cannot be updated');
  }
}

export { Product, IProduct };
