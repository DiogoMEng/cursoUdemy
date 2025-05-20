import { Order } from './Order';
import { CardItem } from './interface/card_item';
import { CustomerOrder } from './interface/customer-protocol';
import { MessagesProtocol } from './interface/messages-protocol';
import { PersistencyProtocol } from './interface/persistency-protocol';
import { ShoppingCartProtocol } from './interface/shoppíng-cart-protocol';

class ShoppingCartMock implements ShoppingCartProtocol {
  addItem(item: CardItem): void {}
  removeItem(index: number): void {}
  get items(): Readonly<CardItem[]> {
    return [];
  }
  total(): number {
    return 1;
  }
  totalWithDicount(): number {
    return 2;
  }
  isEmpty(): boolean {
    return false;
  }
  clear(): void {}
}

class MessagingMock implements MessagesProtocol {
  sendMessage(): void {}
}

class PersistencyMock implements PersistencyProtocol {
  saveOrder(): void {}
}

class CustomerMock implements CustomerOrder {
  getName(): string {
    throw new Error('Method not implemented.');
  }
  getIDN(): string {
    throw new Error('Method not implemented.');
  }
}

const createSut = () => {
  const shoppingCartMock = new ShoppingCartMock();
  const messagingMock = new MessagingMock();
  const persistencyMock = new PersistencyMock();
  const customerMock = new CustomerMock();
  const sut = new Order(
    shoppingCartMock,
    messagingMock,
    persistencyMock,
    customerMock,
  );

  return {
    sut,
    shoppingCartMock,
    messagingMock,
    persistencyMock,
    customerMock,
  };
};

describe('Order', () => {
  it('Should not checkout if cart is empty', () => {
    const { sut, shoppingCartMock } = createSut();

    const shoppingCartMockSpy = jest
      .spyOn(shoppingCartMock, 'isEmpty')
      .mockReturnValueOnce(true);

    sut.checkout();

    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
  });

  it('Should checkout if cart is not empty', () => {
    const { sut, shoppingCartMock } = createSut();

    const shoppingCartMockSpy = jest
      .spyOn(shoppingCartMock, 'isEmpty')
      .mockReturnValueOnce(false);

    sut.checkout();

    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
    expect(sut.orderStatus).toBe('closed');
  });
});
