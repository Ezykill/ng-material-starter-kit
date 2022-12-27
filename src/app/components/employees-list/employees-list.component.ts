import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Subject, Observable} from 'rxjs';
import { PersonModel } from '../../models/person.model';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesListComponent {
  readonly list$: Observable<PersonModel[]> = this._employeesService.getAll();
  private _detailsSubject: Subject<PersonModel> = new Subject<PersonModel>();
  public details$: Observable<PersonModel> = this._detailsSubject.asObservable();


  constructor(private _employeesService: EmployeesService) {
  }

  selectEmployee(employee: PersonModel): void {
    this._detailsSubject.next(employee);
  }
}
