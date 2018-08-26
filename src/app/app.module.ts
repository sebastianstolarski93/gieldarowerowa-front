import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BanerComponent } from './baner/baner.component';

import { OwlModule } from 'ngx-owl-carousel';
import { LatestAuctionComponent } from './latest-auction/latest-auction.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { AppRoutingModule } from './/app-routing.module';
import { ProductItemComponent } from './product-item/product-item.component' ;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BanerComponent,
    LatestAuctionComponent,
    FrontPageComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    OwlModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
