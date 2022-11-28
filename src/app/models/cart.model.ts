export interface CartModel {

  readonly id: number;
  readonly userId: number;
  readonly date: string;
  readonly products: Array<Products>;
}
interface Products{
  readonly productId: number;
  readonly quantity: number;
}
