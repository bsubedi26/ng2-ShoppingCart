import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { NavBarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';

// Import new components by adding it to the declarations array
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
