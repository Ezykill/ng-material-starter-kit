import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterModel } from '../models/register.model';

@Injectable()
export class RegisterService {
  constructor(private _httpClient: HttpClient) {
  }

  create(register: registerModel): Observable<RegisterModel> {
    return this._httpClient.post('https://fakestoreapi.com/users', register);
  }
}
