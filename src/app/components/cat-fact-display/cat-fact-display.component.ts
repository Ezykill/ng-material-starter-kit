import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CatFactModel } from '../../models/cat-fact.model';
import { CatFactService } from '../../services/cat-fact.service';

@Component({
  selector: 'app-cat-fact-display',
  templateUrl: './cat-fact-display.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatFactDisplayComponent {
  readonly fact$: Observable<CatFactModel> = this._catFactService.getFact();

  constructor(private _catFactService: CatFactService) {
  }
}
