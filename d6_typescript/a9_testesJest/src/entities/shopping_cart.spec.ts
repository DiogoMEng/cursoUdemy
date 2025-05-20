import { Discount } from './Discount';
import { ShoppingCart } from './Shopping_cart';
import { CardItem } from './interface/card_item';

const createSut = () => {
  const discountMock = createDiscountMock();

  const sut = new ShoppingCart(discountMock);

  return { sut, discountMock };
};

const createDiscountMock = () => {
  class DiscountMock extends Discount {}
  return new DiscountMock();
};

const createCartItem = (name: string, price: number) => {
  class CartItemMock implements CardItem {
    constructor(
      public name: string,
      public price: number,
    ) {}
  }

  return new CartItemMock(name, price);
};

const createSutWithProducts = () => {
  const { sut, discountMock } = createSut();

  const cartItem1 = createCartItem('Camiseta', 40);
  const cartItem2 = createCartItem('short', 30);
  sut.addItem(cartItem1);
  sut.addItem(cartItem2);

  return { sut, discountMock };
};

describe('Shopping Cart', () => {
  it('Should be an empty cart when no product is added', () => {
    const { sut } = createSut();
    expect(sut.isEmpty()).toBe(true);
  });

  // it('Should have 2 cart items', () => {
  //   const { sut } = createSut();

  //   expect(sut.items.length).toBe(2);
  // });

  // it('Should test and totalWithDiscount', () => {
  //   const { sut } = createSutWithProducts();
  //   expect(sut.total()).toBe(41);
  //   expect(sut.totalWithDicount()).toBe(41);
  // });

  // it('Should add products and clear cart', () => {
  //   const { sut } = createSutWithProducts();
  //   expect(sut.items.length).toBe(2);
  //   sut.clear();
  //   expect(sut.items.length).toBe(0);
  // });
});
