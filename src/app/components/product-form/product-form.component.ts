import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  styleUrls: ['./product-form.component.scss'],
  templateUrl: './product-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormComponent {
  readonly productForm: FormGroup = new FormGroup(
    {
      title: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
      category: new FormControl(),
      image: new FormControl()
    });


  constructor(private _productService: ProductService) {
  }

  onProductFormSubmitted(productForm: FormGroup): void {
    this._productService.create({
      title: productForm.get('title')?.value,
      category: productForm.get('category')?.value,
      price: productForm.get('price')?.value,
      description: productForm.get('description')?.value,
      image: productForm.get('image')?.value,
    }).subscribe();
  }
}
