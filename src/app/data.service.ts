// Creation: ng generate service data @Angular/CLI
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  /**
   * Get products from products.json
   */
  public getProducts() {
  	return this.http.get('./assets/products.json');
  }

  public getProductsById(id: number) {
    return this.getProducts().pipe(
      map(data => {
        let dataArray = data["products"].filter(product => product.sublevel_id === id);
        return dataArray;
      })
    )
  }

 	/**
   * Get categories from categories.json
   */
  public getCategories() {
		return this.http.get('./assets/categories.json');
  }
}
