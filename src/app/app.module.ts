import { BrowserModule } 		   from '@angular/platform-browser';
import { NgModule } 			   from '@angular/core';
import { HttpClientModule}         from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }             from '@angular/forms';
// Angular FlexLayout
import { FlexLayoutModule }         from '@angular/flex-layout';
// Angular Material
import { MatButtonModule }         from '@angular/material/button';
import { MatIconModule }           from '@angular/material/icon';
import { MatSidenavModule }        from '@angular/material/sidenav';
import { MatToolbarModule }        from '@angular/material/toolbar';
import { MatExpansionModule }      from '@angular/material/expansion';
import { MatCardModule }           from '@angular/material/card';
import { MatDividerModule }        from '@angular/material/divider';
import { MatSlideToggleModule }    from '@angular/material/slide-toggle';
import { MatGridListModule }       from '@angular/material/grid-list';
import { MatFormFieldModule }      from '@angular/material/form-field';
import { MatInputModule }          from '@angular/material';
import { MatCheckboxModule }       from '@angular/material/checkbox';
// Services
import { SidenavService }          from './sidenav.service';
import { FilterService }           from './filter.service'

import { AppRoutingModule }        from './app-routing.module';
import { AppComponent } 		   from './app.component';
import { MenuComponent } 		   from './menu/menu.component';
import { ProductComponent }        from './product/product.component';
import { SearchResultComponent }   from './search-result/search-result.component';
import { HeaderComponent }         from './header/header.component';
import { ContentComponent }        from './content/content.component';
import { SearchFilterComponent }   from './search-filter/search-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductComponent,
    SearchResultComponent,
    HeaderComponent,
    ContentComponent,
    SearchFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatExpansionModule,
    MatCardModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule
  ],
  providers: [SidenavService, FilterService],
  bootstrap: [AppComponent]
})
export class AppModule {}
