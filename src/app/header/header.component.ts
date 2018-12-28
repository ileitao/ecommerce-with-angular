import { Component, OnInit } from '@angular/core';
import { SidenavService }    from '../sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	appTitle: string = 'El Baratón';

  toggleActive: boolean = false;

  constructor(private sidenav: SidenavService) { }

  ngOnInit() {
  }

  public toggleSidenav(): void {    
    this.toggleActive = !this.toggleActive;
    this.sidenav.toggle();
  }
}
