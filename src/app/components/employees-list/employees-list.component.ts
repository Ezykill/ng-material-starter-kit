import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {BehaviorSubject, Observable, switchMap} from 'rxjs';
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
  private _refreshSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  public refresh$: Observable<void> = this._refreshSubject.asObservable();
  readonly refreshedList$: Observable<PersonModel[]> = this.refresh$.pipe(
    switchMap(data => this._employeesService.getAll())
  );

  constructor(private _employeesService: EmployeesService) {
  }

  delete(id: number): void {
    this._employeesService.delete(id).subscribe(() => this._refreshSubject.next());
  }
}
