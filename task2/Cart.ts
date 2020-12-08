import { v4 as uuid } from 'uuid';
import { isStringIsEmpty } from './validation';
import { isElementExistInArray, findWrapperFunction } from './utils';
import { Product, IProduct } from './Product';

type sumType = {
  price: number;
  quantity: number;
};

interface ICart {
  id: string;
  items: IProduct[];
  discountCodes: string[];
  selectedCode: string;
  sum: sumType;
}

class Cart implements ICart {
  public id: string;
  public items: IProduct[];
  public discountCodes: string[];
  public selectedCode: string;
  public sum: sumType;
  constructor() {
    this.id = uuid();
    this.items = [];
    this.discountCodes = ['nike10', 'nike20'];
    this.selectedCode = '';
    this.sum = { price: 0, quantity: 0 };
  }

  addProduct(product: IProduct): string {
    const findMyProduct = findWrapperFunction(product);

    const foundIndex = this.items.findIndex(findMyProduct);

    const foundItem: IProduct = this.items[foundIndex];

    if (foundIndex !== -1) {
      foundItem.quantity += 1;
    } else {
      this.items.push(product);
    }
    return `Product ${product.id} was updated`;
  }

  deleteFromCart(product: IProduct): string {
    const isItemSameProduct = findWrapperFunction(product); // factory

    const itemIndexToRemove = this.items.findIndex(isItemSameProduct);
    if (itemIndexToRemove === -1) {
      throw new Error('No product');
    }

    this.items.splice(itemIndexToRemove, 1);
    return `Product ${product.id} was deleted`;
  }

  addDiscountCode(code: string): void {
    isStringIsEmpty(code);

    if (isElementExistInArray(code, this.discountCodes)) {
      throw new Error('Code does not exist');
    }
    this.selectedCode = code;
  }

  sumCart(): string {
    const totals = this.items.reduce(
      function (accumulator, { discountedPrice, quantity }) {
        accumulator.price += discountedPrice;
        accumulator.quantity += quantity;
        return accumulator;
      },
      { price: 0, quantity: 0 }
    );

    if (this.selectedCode !== '') {
      const codeNumbers = /\d{2}$/;
      const getCodeNumbers = this.selectedCode.match(codeNumbers);
      const priceWithDiscount = totals.price - (totals.price * getCodeNumbers) / 100; // Tu mamy zagwostkę
      totals.price = priceWithDiscount;
      this.sum = totals;
      return `Cart was updated`;
    }

    this.sum = totals;
    return `Cart was updated`;
  }
}

export default Cart;
