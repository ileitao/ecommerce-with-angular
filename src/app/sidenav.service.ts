import { Injectable, ViewChild } 	from '@angular/core';
import { ContentComponent }				from './content/content.component';
import { MatSidenav }             from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

	private sidenav: MatSidenav;

  constructor() { }

  public setSidenav(contentSidenav: MatSidenav) {
    this.sidenav = contentSidenav;
  }

  public open() {
    return this.sidenav.open();
  }


  public close() {
    return this.sidenav.close();
  }
  /**
   * Call content component's toggle method
   */
  public toggle(): void {
  	this.sidenav.toggle();
  }
}
