import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CartModel } from '../../models/cart.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-products',
  templateUrl: './cart-products.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartProductsComponent {
  readonly cart$: Observable<CartModel> = this._activatedRoute.params.pipe(switchMap(data => this._cartService.getOne(data['id'])));

  constructor(private _activatedRoute: ActivatedRoute, private _cartService: CartService) {
  }

  checkQuantity(cart:any)
  {
    let quantity =0;
    for(let i=0;i<cart.length;i++)
    {
      quantity+=cart[i].quantity;
    }
    return quantity;
  }
}
