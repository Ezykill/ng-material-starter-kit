import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {PersonModel} from "../models/person.model";
import {map} from "rxjs/operators";
import {ApiResponse} from "./api.response";
import {EmployeeResponse} from "./employee.response";

@Injectable()
export class EmployeesService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<PersonModel[]>
  {
    return this._httpClient.get<ApiResponse<EmployeeResponse[]>>('https://dummy.restapiexample.com/employees').pipe(
      map((response: ApiResponse<EmployeeResponse[]>): PersonModel[] => {
        return response.data.map((employeeResponse: EmployeeResponse) => {
          return {
            personalNumber: employeeResponse.id,
            name: employeeResponse.employee_name,
            age: employeeResponse.employee_age,
            salary: employeeResponse.employee_salary,
            surname: '',
            mail: ''
          }
        })
      }));
  }
}
