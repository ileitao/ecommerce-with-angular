import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

	// Observable boolean sources
  private filterByAvailabilitySrc = new Subject<boolean>();
  private filterByPriceMinSrc = new Subject<number>();
  private filterByPriceMaxSrc = new Subject<number>();
  private filterByStockAmountSrc = new Subject<number>();
  private sortByPriceSrc = new Subject<boolean>();
  private sortByAvailabilitySrc = new Subject<boolean>();
  private sortByStockAmountSrc = new Subject<boolean>();
 
  // Observable boolean streams
  availabilityFilter$ = this.filterByAvailabilitySrc.asObservable();
  priceMinFilter$ = this.filterByPriceMinSrc.asObservable();
  priceMaxFilter$ = this.filterByPriceMaxSrc.asObservable();
  stockAmountFilter$ = this.filterByStockAmountSrc.asObservable();
  priceSorter$ = this.sortByPriceSrc.asObservable();
  availabilitySorter$ = this.sortByAvailabilitySrc.asObservable();
  stockAmountSorter$ = this.sortByStockAmountSrc.asObservable();
 
  // Service message commands
  filterByAvailability(doAction: boolean) {
    this.filterByAvailabilitySrc.next(doAction);
  }

  filterByPriceMin(doAction: number) {
    this.filterByPriceMinSrc.next(doAction);
  }

  filterByPriceMax(doAction: number) {
    this.filterByPriceMaxSrc.next(doAction);
  }

  filterByStockAmount(doAction: number) {
    this.filterByStockAmountSrc.next(doAction);
  }

  sortByPrice(doAction: boolean) {
    this.sortByPriceSrc.next(doAction);
  }


  sortByAvailability(doAction: boolean) {
    this.sortByAvailabilitySrc.next(doAction);
  }

  sortByStockAmount(doAction: boolean) {
    this.sortByStockAmountSrc.next(doAction);
  }

  constructor() { }
}