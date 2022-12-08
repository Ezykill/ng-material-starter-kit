import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { JobDetailsService } from '../../services/job-details.service';
import {JobModel} from "../../models/job.model";

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobDetailsComponent {
  readonly jobDetails$: Observable<JobModel> = this._activatedRoute.params.pipe(switchMap(data => this._jobDetailsService.getOne(data['id'])));

  constructor(private _activatedRoute: ActivatedRoute, private _jobDetailsService: JobDetailsService) {
  }
}
