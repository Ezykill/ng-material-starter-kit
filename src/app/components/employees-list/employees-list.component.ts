import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {BehaviorSubject, combineLatest, Observable, of} from 'rxjs';
import { EmployeeModel } from '../../models/employee.model';
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
  private _orderSubject: BehaviorSubject<string> = new BehaviorSubject<string>('asc');
  public order$: Observable<string> = this._orderSubject.asObservable();
  readonly employees$: Observable<EmployeeModel[]> = combineLatest([
    this._employeesService.getAll(),
    this.order$
  ]).pipe(
    map(([employees, order]: [EmployeeModel[], string]) => {
      return employees.sort((a, b) => {
        if(a.employee_salary > b.employee_salary) return order === 'asc' ? 1 : -1;
        if(a.employee_salary < b.employee_salary) return order === 'asc' ? -1 : 1;
        return 0;
      })
    })
  );
  public orders: Observable<string[]> =  of(['asc', 'desc'])
  constructor(private _employeesService: EmployeesService) {
  }

  sort(order: string): void {
    this._orderSubject.next(order);
  }
}
