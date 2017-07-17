import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { YoutubeComponent } from './components/youtube/youtube.component';

const routes: Routes = [
  {
    path: '',
    component: YoutubeComponent
  },
  // {
  //   path: 'detail/:id',
  //   component: ProductDetailComponent
  // },
  // {
  //   path: 'cart',
  //   component: CartComponent
  // },
  {
    path: 'youtube/search',
    component: YoutubeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
