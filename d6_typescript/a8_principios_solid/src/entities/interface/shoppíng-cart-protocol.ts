import { CardItem } from './card_item';

export interface ShoppingCartProtocol {
  addItem(item: CardItem): void;
  removeItem(index: number): void;
  items(): Readonly<CardItem[]>;
  total(): number;
  totalWithDicount(): number;
  isEmpty(): boolean;
  clear(): void;
}
