import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { JobModel } from '../../models/job.model';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-job-list',
  styleUrls: ['./job-list.component.scss'],
  templateUrl: './job-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobListComponent {
  readonly list$: Observable<JobModel[]> = this._jobService.getAll();

  constructor(private _jobService: JobService) {
  }
}
