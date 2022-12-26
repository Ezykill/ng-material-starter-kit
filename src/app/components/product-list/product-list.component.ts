import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
  readonly list$: Observable<ProductModel[]> = this._productsService.getAll();
  private _selectedProductSubject: Subject<string> = new Subject<string>();
  public selectedProduct$: Observable<string> = this._selectedProductSubject.asObservable();
  readonly details$: Observable<ProductModel> = this.selectedProduct$.pipe(
    switchMap(data => this._productsService.getOne(data))
  );

  constructor(private _productsService: ProductsService) {
  }

  selectProduct(id: string): void {
    this._selectedProductSubject.next(id);
  }
}
