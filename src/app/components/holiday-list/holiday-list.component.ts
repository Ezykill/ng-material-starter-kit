import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { HolidayModel } from '../../models/holiday.model';
import { HolidaysService } from '../../services/holidays.service';

@Component({
  selector: 'app-holiday-list',
  styleUrls: ['./holiday-list.component.scss'],
  templateUrl: './holiday-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HolidayListComponent {
  readonly list$: Observable<HolidayModel[]> = this._holidaysService.getAll();

  constructor(private _holidaysService: HolidaysService) {
  }
}
