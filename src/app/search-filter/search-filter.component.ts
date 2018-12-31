import { Component, OnInit }   from '@angular/core';
import { Router }              from '@angular/router';
import { EventBrokerService }  from '../EventBrokerService';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {

	filterByAvailability: boolean = false;
	filterByPrice: boolean = false;
  sortByAvailability: boolean = false;
  sortByPrice: boolean = false;
  sortByAmount: boolean = false;
  filterByPriceMin: number;
  filterByPriceMax: number;
  filterByStockAmount: number;

  constructor(private eventBroker: EventBrokerService) { }
  
  ngOnInit() {
    /*this.router.events.subscribe(val => {
      this.resetFilters();
    });*/
  }

  filterByAvailabilityCmd() {
    console.log();
    this.eventBroker.emit<boolean>('filterByAvailabilityEvent', !this.filterByAvailability);
  }
}
