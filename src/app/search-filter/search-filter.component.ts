import { Component, OnInit, ViewChild } from '@angular/core';
import { Router }                       from '@angular/router';
import { FilterService }                from '../filter.service';
import { Subscription }                 from 'rxjs';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {
  filterByPriceMin: number = null;
  filterByPriceMax: number = null;
  filterByStockAmount: number = null;
	filterByAvailability: boolean = false;  
  sortByAvailability: boolean = false;
  sortByPrice: boolean = false;
  sortByStockAmount: boolean = false;
  subscription: Subscription;

  constructor(private filterService: FilterService) { 
    // Filters
    this.subscription = filterService.resetFilters$.subscribe(() => {
      return this.resetFilters();
    });
  }
  
  ngOnInit() {
  }

  filterByAvailabilityCmd() {
    this.filterService.filterByAvailability(!this.filterByAvailability);
  }

  filterByPriceMinCmd(val: number) {
    this.filterService.filterByPriceMin(val);
  }

  filterByPriceMaxCmd(val: number) {
    this.filterService.filterByPriceMax(val);
  }

  filterByStockAmountCmd(val: number) {
    this.filterService.filterByStockAmount(val);
  }

  sortByPriceCmd() {
    this.filterService.sortByPrice(!this.sortByPrice);
  }

  sortByStockAmountCmd() {
    this.filterService.sortByStockAmount(!this.sortByStockAmount);
  }

  sortByAvailabilityCmd() {
    this.filterService.sortByAvailability(!this.sortByAvailability);
  }

  resetFilters() {
    this.filterByPriceMin = null;
    this.filterByPriceMax = null;
    this.filterByStockAmount = null;
    this.filterByAvailability = false;
    this.sortByAvailability = false;
    this.sortByPrice = false;
    this.sortByStockAmount = false;
  }
}
