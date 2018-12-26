import { BrowserModule } 		       from '@angular/platform-browser';
import { NgModule } 				       from '@angular/core';
import { HttpClientModule}         from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Angular Material
import { MatButtonModule }         from '@angular/material/button';
import { MatIconModule }           from '@angular/material/icon';
import { MatSidenavModule }        from '@angular/material/sidenav';
import { MatToolbarModule }        from '@angular/material/toolbar';
// Services
import { SidenavService }          from './sidenav.service';

import { AppRoutingModule }        from './app-routing.module';
import { AppComponent } 		       from './app.component';
import { MenuComponent } 		       from './menu/menu.component';
import { ProductComponent }        from './product/product.component';
import { SearchResultComponent }   from './search-result/search-result.component';
import { HeaderComponent }         from './header/header.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductComponent,
    SearchResultComponent,
    HeaderComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  providers: [SidenavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
