import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductDetailComponent } from './product-detail.component';
import { NavBarComponent } from './navbar.component';
import { ProductComponent } from './product.component';

import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductDetailComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  // If service is specified in app.module (this file), then all components have access to the SAME instance of that service 
  // This is useful when exactly one object is needed to coordinate actions across the system.
  // This is an example of the singleton pattern (Design pattern that restricts the instantiation of a class to one object) 
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
