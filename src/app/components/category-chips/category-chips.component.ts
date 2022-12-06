import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-chips',
  styleUrls: ['./category-chips.component.scss'],
  templateUrl: './category-chips.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryChipsComponent {
  readonly list$: Observable<string[]> = this._categoryService.getAll();

  constructor(private _categoryService: CategoryService) {
  }
}
