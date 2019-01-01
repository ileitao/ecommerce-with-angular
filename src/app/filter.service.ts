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
 
  // Observable boolean streams
  availabilityFilter$ = this.filterByAvailabilitySrc.asObservable();
  priceMinFilter$ = this.filterByPriceMinSrc.asObservable();
  priceMaxFilter$ = this.filterByPriceMaxSrc.asObservable();
  stockAmountFilter$ = this.filterByStockAmountSrc.asObservable();
 
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

  constructor() { }
}