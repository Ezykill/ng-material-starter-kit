import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AddProductModel} from "../models/add-product.model";

@Injectable()
export class AddProductService {
  constructor(private _httpClient: HttpClient) {
  }

  create(product: Omit<AddProductModel, 'id'>): Observable<AddProductModel> {
    return this._httpClient.post<AddProductModel>('https://fakestoreapi.com/products', product);
  }
}
