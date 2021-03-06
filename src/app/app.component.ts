import { Component, ViewChild } from '@angular/core';
import { DomSanitizer } 	      from '@angular/platform-browser';
import { MatIconRegistry }      from '@angular/material';
import { MatSidenav }           from '@angular/material';
import { LocalStorageService }  from './local-storage.service';
import { ShoppingCartService }  from './shopping-cart.service';
import { SidenavService }       from './sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('ContentComponent') 
  public contentSidenav: MatSidenav;

  title: string = 'ecommerce with angular';
	
	constructor(iconRegistry: MatIconRegistry, 
              sanitizer: DomSanitizer, 
              private localStorageService: LocalStorageService,              
              private shoppingCartService: ShoppingCartService,
              private sidenavService: SidenavService) {
    iconRegistry.addSvgIcon(
      'menu',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/menu-icon.svg'));
    iconRegistry.addSvgIcon(
      'shopping-cart',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/shopping-cart-icon.svg'));
    iconRegistry.addSvgIcon(
      'add-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/add-icon.svg'));
    iconRegistry.addSvgIcon(
      'remove-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/remove-icon.svg'));
    iconRegistry.addSvgIcon(
      'remove-all-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/remove-all-icon.svg'));
    iconRegistry.addSvgIcon(
      'attach-money-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/attach-money-icon.svg'));
  }

  ngOnInit(): void {
    let storageName: string = 'shopping-cart';
    if (this.localStorageService.storageAvailable('localStorage')) {
      if (this.localStorageService.getStorage().getItem(storageName)) {
        this.shoppingCartService.getFromLocalStorage(storageName);
      }
    }

    this.sidenavService.setSidenav(this.contentSidenav);
  }
}
