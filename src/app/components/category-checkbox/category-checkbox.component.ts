import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryModel } from '../../models/category.model';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-category-checkbox',
  styleUrls: ['./category-checkbox.component.scss'],
  templateUrl: './category-checkbox.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryCheckboxComponent {
  readonly list$: Observable<CategoryModel[]> = this._categoriesService.getAll();

  constructor(private _categoriesService: CategoriesService) {
  }
}
