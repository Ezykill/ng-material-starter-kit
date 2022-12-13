import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {BehaviorSubject, combineLatest, Observable, of} from 'rxjs';
import { PersonModel } from '../../models/person.model';
import { EmployeesService } from '../../services/employees.service';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-employees-list',
  styleUrls: ['./employees-list.component.scss'],
  templateUrl: './employees-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesListComponent {
  private _ageRangeSubject: BehaviorSubject<string> = new BehaviorSubject<string>('all');
  public ageRange$: Observable<string> = this._ageRangeSubject.asObservable();
  readonly employees$: Observable<PersonModel[]> = combineLatest([
    this._employeesService.getAll(),
    this.ageRange$
  ]).pipe(
    map(([employees, ageRange]: [PersonModel[], string]) => {
      return employees.filter(employee => {
        if(ageRange === 'all') return true;
        if(ageRange === '0-20') return employee.age >= 0 && employee.age <= 20;
        if(ageRange === '21-30') return employee.age >= 21 && employee.age <= 30;
        if(ageRange === '31-40') return employee.age >= 31 && employee.age <= 40;
        if(ageRange === '41-50') return employee.age >= 41 && employee.age <= 50;
        if(ageRange === '51-100') return employee.age >= 51 && employee.age <= 100;
        return false;
      })
    })
  );
  public ageRanges: Observable<string[]> =  of(['all', '0-20', '21-30', '31-40', '41-50', '51-100'])
  constructor(private _employeesService: EmployeesService) {
  }

  filterByAgeRange(ageRange: string): void {
    this._ageRangeSubject.next(ageRange);
  }
}
