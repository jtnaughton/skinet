import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

import { IBrand } from '../shared/models/brand';
import { IPagination } from '../shared/models/pagination';
import { IProduct } from '../shared/models/product';
import { IProductType } from '../shared/models/productType';
import { ShopParams } from '../shared/models/shopParams';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  baseUrl = 'https://localhost:5001/api/';
  products: IProduct[];

  constructor(private http: HttpClient) { }

  getProducts(shopParams: ShopParams) {
    let params = new HttpParams();


    // Filter
    if (shopParams.brandIdSelected !== 0) {
    params = params.append('brandId', shopParams.brandIdSelected.toString());
    }

    if (shopParams.typeIdSelected !== 0) {
     params = params.append('typeId', shopParams.typeIdSelected.toString());
    }

    // Search
    if(shopParams.search) {
      params = params.append('search', shopParams.search);
    }

    // Sort
    params = params.append('sort', shopParams.sortSelected);

    // Pagnination
    params = params.append('pageIndex', shopParams.pageNumber.toString());
    params = params.append('pageIndex', shopParams.pageSize.toString());


    return this.http.get<IPagination>(this.baseUrl + 'products', { observe: 'response', params })
    .pipe(
      map(
        response => {
          return response.body;
        }
      )
    )
  }

  getProductTypes(): Observable<IProductType[]>{
    return this.http.get<IProductType[]>(this.baseUrl + 'products/types');
  }

  getBrands(): Observable<IBrand[]>{
    return this.http.get<IBrand[]>(this.baseUrl + 'products/brands');
  }

}
