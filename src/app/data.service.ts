// Creation: ng generate service data @Angular/CLI
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

 	/**
   * Get categories from categories.json
   */
  public getCategories() {
		return this.http.get('./assets/categories.json');
  }
}
