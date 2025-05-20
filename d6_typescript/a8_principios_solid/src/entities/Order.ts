import { CustomerOrder } from './interface/customer-protocol';
import { MessagesProtocol } from './interface/messages-protocol';
import { Status } from './interface/order_status';
import { PersistencyProtocol } from './interface/persistency-protocol';
import { ShoppingCartProtocol } from './interface/shoppíng-cart-protocol';

export class Order {
  private _orderStatus: Status = 'open';

  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly messaging: MessagesProtocol,
    private readonly persistency: PersistencyProtocol,
    private readonly customer: CustomerOrder,
  ) {}

  get orderStatus(): Status {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }

    this._orderStatus = 'closed';
    this.messaging.sendMessage(
      `Seu pedido total de ${this.cart.totalWithDicount()} foi recebido`,
    );
    this.persistency.saveOrder();
    this.cart.clear();
    console.log(
      'O cliente é: ',
      this.customer.getName(),
      this.customer.getIDN(),
    );
  }
}
