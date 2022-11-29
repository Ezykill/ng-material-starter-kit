import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivityModel } from '../../models/activity.model';
import { ActivityService } from '../../services/activity.service';

@Component({
  selector: 'app-activity-display',
  templateUrl: './activity-display.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivityDisplayComponent {
  readonly list$: Observable<ActivityModel> = this._activityService.getAct();

  constructor(private _activityService: ActivityService) {
  }
}
