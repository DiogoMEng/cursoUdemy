import { Messages } from './services/Messages';
import { Order } from './entities/Order';
import { Persistency } from './services/Persistency';
import { Product } from './entities/Product';
import { ShoppingCart } from './entities/Shopping_cart';
import { FiftyPercentDiscount } from './entities/Discount';
import { EnterpriseCustomer, IndividualCustomer } from './entities/Customer';
import { MessagesProtocol } from './entities/interface/messages-protocol';

const fiftyPercentDiscount = new FiftyPercentDiscount();
const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const messaging = new Messages();
const persistency = new Persistency();
const individualCustomer = new IndividualCustomer(
  'Diogo',
  'Mello',
  '111.111.111-11',
);
const enterpriseCustomer = new EnterpriseCustomer(
  'Empresa Teste',
  '2222222222222',
);

class MessagingMock implements MessagesProtocol {
  sendMessage(msg: string): void {
    console.log('A mensagem foi enviada pelo Mock');
  }
}

const messageMock = new MessagingMock();

const order = new Order(
  shoppingCart,
  messageMock,
  persistency,
  enterpriseCustomer,
);

shoppingCart.addItem(new Product('t-shirt', 50.0));
shoppingCart.addItem(new Product('journal', 23.45));
shoppingCart.addItem(new Product('pencil', 5.0));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDicount());
console.log(order.orderStatus);
order.checkout();
