import { v4 as uuid } from 'uuid';
import { isStringIsEmpty, isPositiveNumber, isPositiveNumberAndInRange } from './validation';
import { isElementExistInArray } from './utils';

type keyValues = 'name' | 'price';
type avaliableTypes = number | string;

interface IProduct {
  id: string;
  name: string;
  price: number;
  initialCategory: string;
  discountedPrice: number;
  categories: string[];
  discount: number;
  quantity: number;
  read(): void;
  addDiscount(discount: number): void;
  addCategory(category: string): void;
  removeCategory(category: string): void;
  update(key: keyValues, value: avaliableTypes): void;
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
    isPositiveNumber(price);
    isStringIsEmpty(initialCategory);
    this.name = name;
    this.price = price;
    this.initialCategory = initialCategory;
    this.discountedPrice = price;
    this.categories = [initialCategory];
  }

  read(): void {
    console.log(`
          Id: ${this.id}
          Name: ${this.name}
          Price: ${this.price}
          Quantity: ${this.quantity}
          Discount: ${this.discount}
          Category: ${this.initialCategory}`);
  }

  addDiscount(discount: number): void {
    isPositiveNumberAndInRange(discount);
    this.discount = discount;
    const finalPrice = this.price - (discount * this.price) / 100;
    this.discountedPrice = finalPrice;
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

  update(key: keyValues, value: avaliableTypes): void {
    if (key === 'price' && typeof value === 'number') {
      isPositiveNumber(value);
      this[key] = value;
    } else if (value === 'string' && key === 'name') {
      isStringIsEmpty(value);
      this[key] = value;
    }
    throw new Error('Product cannot be updated');
  }
}

export { Product, IProduct };
