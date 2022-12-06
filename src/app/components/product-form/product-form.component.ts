import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AddProductService } from '../../services/add-product.service';

@Component({
  selector: 'app-product-form',
  styleUrls: ['./product-form.component.scss'],
  templateUrl: './product-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormComponent {
  readonly productForm: FormGroup = new FormGroup({
    title: new FormControl(),
    price: new FormControl()
  });

  constructor(private _addProductService: AddProductService) {
  }

  onProductFormSubmitted(productForm: FormGroup): void {
    this._addProductService.create({
      title: productForm.get('title')?.value,
      price: productForm.get('price')?.value
    }).subscribe();
  }
}
