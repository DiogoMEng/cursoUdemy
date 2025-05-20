import { CardItem } from './interface/card_item';

export class Product implements CardItem {
  constructor(
    public name: string,
    public price: number,
  ) {}
}
